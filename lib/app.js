const express = require('express');
const app = express();
const moviesRoutes = require('./routes/movies');


//for directing to html files in public folder
// const html_dir = './public/';

// app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api/v1/movies', moviesRoutes);

app.get('/', (req, res) => {
  res.send('working');
});


module.exports = app;
