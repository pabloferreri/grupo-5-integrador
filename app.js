var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session');

const isLoggedMiddleware = require("./middlewares/isLoggedMiddleware");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();



//app.listen
app.listen(process.env.PORT || 3000, () =>{
  console.log('Servidor corriendo en puerto 3000.');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); 


// Express session
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
}))

app.use(isLoggedMiddleware);

//Conections
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/productos', productsRouter)

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
  res.render('error');
});

module.exports = app;
