const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const testApi = require('./routes/testAPI');
const startGame = require('./routes/startGame');
const getGame = require('./routes/getGame');
const gameLogger = require('./routes/gameLogger');
const throwDice = require('./routes/throwDice');
const auctionHandling = require('./routes/auctionHandling');

const app = express();

require("dotenv").config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = process.env.MONGODB_URI;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/testAPI', testApi);
app.use('/startGame', startGame);
app.use('/getGame', getGame);
app.use('/gameLogger', gameLogger);
app.use('/throwDice', throwDice);
app.use('/auctionHandling', auctionHandling);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
