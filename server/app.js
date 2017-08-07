let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let {multer, storage} = require('./utils/multer');
let { passport } = require('./utils/jwt');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
let { mongoose } = require('./utils/mongoose');

let app = express();
app.use(passport.initialize());
app.use(multer({ storage: storage }).any());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: '3245234234234234234',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/blog', require('./routes/blog'));
app.use('/contact', require('./routes/contact'));
app.use('/auth', require('./routes/auth'));

app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json({message: "Success! You can not see this without a token"});
});

let user = require('./models/user')
app.get("/user", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json({message: "Success! You can not see this without a token"});
});

// app.get("/secretDebug",
//     function(req, res, next){
//         console.log(req.get('Authorization'));
//         next();
//     }, function(req, res){
//         res.json("debugging");
//     });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err.message);
  // render the error page
  res.status(err.status || 500);
  res.json({
      error: err.message
  });
  //res.render('error');
});

module.exports = app;
