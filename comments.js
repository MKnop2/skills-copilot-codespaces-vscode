// Create web server
const express = require('express');
// Create connection to MySQL
const mysql = require('mysql');
// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});
// Create GET /comments endpoint
app.get('/comments', (req, res) => {
  // Query MySQL to get all comments
  connection.query('SELECT * FROM comments', (err, data) => {
    if (err) throw err;
    // Send back data as response
    res.send(data);
  });
});
// Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Install cors
const cors = require('cors');
app.use(cors());
// Create connection to MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'commentsection'
});
// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});
// Create GET /comments endpoint
app.get('/comments', (req, res) => {
  // Query MySQL to get all comments
  connection.query('SELECT * FROM comments', (err, data) => {
    if (err) throw err;
    // Send back data as response
    res.send(data);
  });
});
// Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.js
// Create web server