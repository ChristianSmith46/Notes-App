const express = require('express');
const api = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('api', api)
app.use(express.static('public'));

app.get('/notes', (req, res) => {

});

app.get('*', (req, res) => {

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

