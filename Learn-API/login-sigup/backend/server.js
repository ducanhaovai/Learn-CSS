const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Đăng ký
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Kiểm tra xem có dữ liệu được gửi lên không
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password];
    
    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('User registered successfully');
        return res.status(200).json({ message: 'User registered successfully' });
    });
});

// Đăng nhập
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error selecting user from database:', err);
            return res.status(500).json({ error: 'Error selecting user from database' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Error comparing passwords' });
            }
            if (!result) {
                return res.status(401).json({ error: 'Invalid password' });
            }
            console.log('User logged in successfully');
            return res.status(200).json({ message: 'User logged in successfully' });
        });
    });
});

const port = 8081;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
