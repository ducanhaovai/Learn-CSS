const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");


const cookie = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");


const app = express();
app.use(express.json());
app.use(cors({
  origin:['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(cookie());

app.use(session({
  key: "userID",
  secret: 'ducanh',
  resave: false,
  saveUninitialized: false,
  cookie:{
    express: 60 * 60 * 24,
  }
}))


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "singup",
  port: 3306,
});
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token){
    return res.json({Message: "need token!"})
  }else{
    jwt.verify(token, "our-jsonwebtoken-key",  (err, decoded) =>{
       if(err) {
        return res.json({Message:"Xac nhan that bai"})
       }else{
        req.name = decoded.name;
        next();
       }
    })
  }
}

app.get('/home',verifyUser, (req, res) => {
     return res.json({Status: "Success", name: req.name})
})

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

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Error selecting user from database:", err);
      return res
        .status(500)
        .json({ error: "Error selecting user from database" });
    }

    if (results.length === 0) {
      return res
        .status(401)
        .json({ error: "User not found or invalid credentials" });
    }

    const user = results[0];
    // So sánh mật khẩu đã mã hóa với mật khẩu người dùng nhập vào
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).json({ error: "Error comparing passwords" });
      }
      if (!result) {
        return res
          .status(401)
          .json({ error: "User not found or invalid credentials" });
      }
      if (results.length >  0) {
        console.log("User logged in successfully");
      const token = jwt.sign({user}, "our-jsonwebtoken-key", {expiresIn: '1d'});
      res.cookie('token', token);
      return res.json({Status: "Success"})
      }

      
      
    });
  });



  app.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: "Success"})
  })


});
const port = 8088;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
