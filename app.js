var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var axios = require('axios'); // Use this to make api calls. Docs at https://github.com/axios/axios


// Input your your own Hapikey from https://app.hubspot.com/keys/get (after you are logged into your portal)
var HAPIKEY = ''

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');

/* Start app configuration. */
var port = 3000;
app.set('port', port);
app.use(favicon(path.join(__dirname, 'public', 'fav.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* End app configuration. */



/* Start route definitions. */
// 
app.get('/', function(req, res) {
  res.render('index', { title: 'Web Use Cases', framework: 'Express' });
});



app.get('/forms', function(req, res) {
  // Testing form rendering and submissions

  var context = { title: 'Forms'}  
  res.render('forms',context);
  }
);


app.get('/login', function(req, res) {
  // Showing a custom event

  var context = { title: 'Login'}  
  res.render('login',context);
  }
);



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


var server = http.createServer(app);


server.listen(process.env.PORT || port);
console.log(`listening to port: ${port}`)



