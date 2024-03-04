const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const axios = require("axios");
const bcrypt = require("bcrypt");
require("dotenv").config();

const cookie = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookie());

app.use(
  session({
    key: "userID",
    secret: "ducanh",
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "singup",
  port: 3306,
});
const verifyUser = (req, res, next) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;
  const token = req.cookies.token;

  if (!accessToken && !refreshToken && !token) {
    return res.status(401).json({ Message: "At least one of accessToken, refreshToken, or token is required!" });
  } else {
    if (accessToken) {
      jwt.verify(accessToken, "our-jsonwebtoken-key", (err, decodedAccessToken) => {
        if (err) {
          return res.status(401).json({ Message: "Access token verification failed" });
        } else {
          req.accessTokenData = decodedAccessToken;
          next();
        }
      });
    } else if (refreshToken) {
      jwt.verify(refreshToken, "our-refresh-token-secret", (err, decodedRefreshToken) => {
        if (err) {
          return res.status(401).json({ Message: "Refresh token verification failed" });
        } else {
          req.refreshTokenData = decodedRefreshToken;
          next();
        }
      });
    } else if (token) {
      jwt.verify(token, "our-token-secret", (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ Message: "Token verification failed" });
        } else {
          req.tokenData = decodedToken;
          next();
        }
      });
    }
  }
};


const getOauthGooleToken = async (code) => {
  const body = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_AUTHORIZED_REDIRECT_URI,
    grant_type: "authorization_code",
  };

  const { data } = await axios.post(
    "https://oauth2.googleapis.com/token",
    new URLSearchParams(body),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return data;
};

// Hàm gửi yêu cầu lấy thông tin người dùng từ Google dựa trên Google OAuth token
const getGoogleUser = async ({ id_token, access_token }) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v1/userinfo",
    {
      params: { access_token, alt: "json" },
      headers: { Authorization: `Bearer ${id_token}` },
    }
  );

  return data;
};

app.get("/home", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Kiểm tra xem có dữ liệu được gửi lên không
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Sử dụng bcrypt để mã hóa mật khẩu
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ error: "Error hashing password" });
    }

    // Thực hiện thêm người dùng vào cơ sở dữ liệu với mật khẩu đã mã hóa
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error inserting user into database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("User registered successfully");
      return res.status(200).json({ message: "User registered successfully" });
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Error selecting user from database:", err);
      return res
        .status(500)
        .json({ error: "Error selecting user from database" });
    }

    if (results.length === 0) {
      // Không tìm thấy người dùng với email được cung cấp
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).json({ error: "Error comparing passwords" });
      }

      if (!result) {
        // Mật khẩu không chính xác
        return res.status(401).json({ error: "Invalid password" });
      }

      // Đăng nhập thành công: tạo token và gửi về cho người dùng
      console.log("User logged in successfully");
      const token = jwt.sign({ user }, "our-jsonwebtoken-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Status: "Success" });
    });
  });

  app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({ Status: "Success" });
  });
});

app.get("/api/oauth/google", async (req, res, next) => {
  try {
    const { code } = req.query;
    const data = await getOauthGooleToken(code);
    const { id_token, access_token } = data;
    const googleUser = await getGoogleUser({ id_token, access_token });

    if (!googleUser.verified_email) {
      return res.status(403).json({
        message: "Google email not verified",
      });
    }

    const { email, name, picture } = googleUser;
    console.log(googleUser); // Lấy thông tin email, tên và hình ảnh của người dùng

    const manual_access_token = jwt.sign(
      { email: googleUser.email, type: "access_token" },
      process.env.AC_PRIVATE_KEY,
      { expiresIn: "15m" }
    );
    const manual_refresh_token = jwt.sign(
      { email: googleUser.email, type: "refresh_token" },
      process.env.RF_PRIVATE_KEY,
      { expiresIn: "100d" }
    );
    
    

    return res.redirect(
      `http://localhost:3000/login/oauth?access_token=${manual_access_token}&refresh_token=${manual_refresh_token}&name=${name}&picture=${picture}`
    );
    
    
  } catch (error) {
    next(error);
  }
});

const port = 8088;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
