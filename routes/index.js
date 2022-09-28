const express = require('express');
// Require the notes folder for routes
const notesRouter = require('./notes');

const app = express();

// Add the routes to /notes
app.use('/notes', notesRouter);

// Export app for server.js
module.exports = app;