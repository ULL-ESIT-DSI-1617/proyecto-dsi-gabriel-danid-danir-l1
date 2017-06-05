var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var app = express()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('PF');

app.use(express.static('public'))

passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());



app.get('/', function(req, res) {
    res.render('home', { user: req.user , visitas: 0 });

  });
app.get('/calculadora', function(req, res){


    var user = req.user;
    console.log("HOLAAAAAAAA" + user.displayName);

        var stmt = db.prepare("INSERT INTO user VALUES (?,?)");

        var d =new Date();
        var n = d.toLocaleTimeString();
        var i = user.id;

        stmt.run(i,n)
        stmt.finalize();
        db.each("SELECT id, fr FROM user", function(err, row){
          console.log("User id; " +row.id, row.fr);
        });
        	stmt = db.prepare("SELECT count(id) resultado FROM user WHERE id LIKE ?");
        	//pasamos el id del usuario a la consulta
            stmt.bind(i);
            stmt.get(function(error, row)
            {
            	if(error)
                {
                    throw err;
                }
                else
                {
                	//retornamos la fila con los datos del usuario
                    if(row)
                    {

                        console.log("El usuario no existe", row.resultado);
                        res.render('home', { user: req.user, visitas: row.resultado });
                    }
                    else
                    {
                    	console.log("El usuario no existe");
                    }
                }
            });


});
app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/calculadora');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.use(express.static(__dirname + '/public'));

app.listen(3000);
