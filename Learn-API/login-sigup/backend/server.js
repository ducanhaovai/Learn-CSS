const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "singup",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Đăng ký
app.post("/signup", (req, res) => {



  const { name, email, password } = req.body;
 console.log(name)

 // Kiểm tra xem có dữ liệu được gửi lên không
if (!name || !email || !password) {
return res.status(400).json({ error: "Missing required fields" });
 }

 const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
 
 const values = [name, email, password];

 var query =  db.query(sql, values, (err, results) => {
  

    if (err) {
      console.error("Error inserting user into database:", err);
     return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("User registered successfully");
    
    
    return res.status(200).json({ message: "User registered successfully" });
    });
});

// Đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Error selecting user from database:", err);
      return res
        .status(500)
        .json({ error: "Error selecting user from database" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found or invalid credentials" });
    }

    console.log("User logged in successfully");
    return res.status(200).json({ message: "User logged in successfully" });
  });
});


const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
