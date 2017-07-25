let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let products = require('./routes/products');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //THIRD PARTY MIDDLEWARE
app.use(bodyParser.json());  //THIRD PARTY MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));  //THIRD PARTY MIDDLEWARE
app.use(cookieParser());  //THIRD PARTY MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public'))); // BUILT-IN MIDDLEWARE

app.use('/', index);
app.use('/products', products); //ROUTER MIDDLEWARE


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err); // pass the execution to error middleware
});

// error handler - ERROR MIDDLEWARE
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
