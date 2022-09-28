// Require Libraries
const express = require('express');
const path = require('path');
// Require the api routes
const api = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// Api route setup
app.use('/api', api)

// Get route for the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Get route to send people to index.html if they didn't use a /notes or /api route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start listening to port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

