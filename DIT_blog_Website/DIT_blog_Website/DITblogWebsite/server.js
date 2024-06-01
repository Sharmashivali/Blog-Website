// // const express = require('express');
// // const mysql = require('mysql');
// // const app = express();
// // const port = 3000; // Change this to your desired port

// // // Create a MySQL connection
// // const db = mysql.createConnection({
// //   host: '127.0.0.1', // Your MySQL host
// //   port: 3306, // Default MySQL port
// //   user: 'sharmaManik', // Your MySQL username
// //   password: 'mAnik@2222', // Your MySQL password
// //   database: 'student' // Your MySQL database name
// // });

// // // Connect to the database
// // db.connect(err => {
// //   if (err) {
// //     console.error('Database connection failed: ' + err.stack);
// //     return;
// //   }
// //   console.log('Connected to the database');
// // });

// // // Serve static files (e.g., HTML, CSS, JavaScript)
// // app.use(express.static('public'));

// // // Define a search endpoint
// // app.get('/search', (req, res) => {
// //   const searchQuery = req.query.q; // Get the search query from the request

// //   // Create and execute a SQL query to search for content
// //   const sql = 'SELECT * FROM content WHERE title LIKE ?';
// //   db.query(sql, [`%${searchQuery}%`], (err, results) => {
// //     if (err) {
// //       console.error('Database query error: ' + err);
// //       res.status(500).json({ error: 'Internal server error' });
// //     } else {
// //       res.json(results);
// //     }
// //   });
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });
// const express = require('express');
// const app = express();
// const port = 3002;

// // Serve static files like HTML, CSS, and images from a 'public' directory
// app.use(express.static('public'));

// Define a route for the root path ("/")
app.get('/', (req, res) => {
    // Send an HTML file as a response
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/index.css');
    res.sendFile(__dirname + '/public/index.js');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
