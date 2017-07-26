let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let users = require('./routes/users');

let app = express();

let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

let activeConnections = 0;

//io.on , io.emit or io.sockets.on, io.sockets.emit => emit and listen for all connections
//socket.on, socket.emit => list and emit for a specific connection

io.on('connection', function (socket) {

  ++activeConnections;
  io.emit('active-connections', activeConnections); //emit event for all connections

  setInterval(function () {
    socket.emit('time', { //emit event only for current connection
      time: new Date()
    });
  }, 1000);

  socket.on('disconnect', function () { //emit event only for current connection
    --activeConnections;
    io.emit('active-connections', activeConnections); //emit event for all connections
  });

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


let port = process.env.PORT || 4000;
server.listen(port, function () {
  console.log(`Hurray !!!, your socket.io powered app is running at http://localhost:${port}`)
});

module.exports = app;
