var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);





var index = require('./routes/index');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/myneighbornew");






var app = express();


app.use(session({
    secret: '719eef97-afd3-40ac-b235-30b16cd8c978',
    resave: false,
    saveUninitialized: true,
    name: "mysosed",
    cookie: { secure: false, maxAge: 365 * 24 * 60 * 60 * 1000 },
    store: new MongoStore({ url: 'mongodb://localhost/myneighbornew' })
}));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use('/', index);

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
  res.json(res.locals);
});

module.exports = app;
