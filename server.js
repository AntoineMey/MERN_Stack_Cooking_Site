const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const receipts = require('./routes/api/receipts');
const ingredients = require('./routes/api/ingredients');
const ustensils = require('./routes/api/ustensils');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => cnosole.log(err));

//connect the database
connectDB();
app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json({ extended: false}));

//Use routes
app.use('/api/users', users);
app.use('/api/receipts', receipts);
app.use('/api/ingredients', ingredients);
app.use('/api/ustensils', ustensils);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
