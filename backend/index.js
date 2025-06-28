const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// ? MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gandakO1', // Your actual MySQL password
    database: 'studio_kosmos'
});

db.connect(err => {
    if (err) {
        console.error('? MySQL connection failed:', err);
    } else {
        console.log('? Connected to MySQL database');
    }
});

// ? Middleware
app.use(cors());
app.use(bodyParser.json());

// ? Home test route
app.get('/', (req, res) => {
    res.send('Studio Kosmos backend is running!');
});

// ? Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('? Login error:', err);
            return res.status(500).json({ message: 'Server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                role: user.role
            }
        });
    });
});

// ? Start server
app.listen(PORT, () => {
    console.log(`?? Backend running at http://localhost:${PORT}`);
});
