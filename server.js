'use strict'
var
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    bcrypt = require('bcrypt-nodejs'),
    path = require("path"),

    app = express(),
    port= process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true})); //form params in req.body

//Objeto de usuarios.
var users = {
  dsi1617 : bcrypt.hashSync("dsi1617password")
};

//Inicializamos la sesión.
app.use(session({
    secret: '2C44-4D44-WppQ212',
    resave: true,
    saveUninitialized: true
}));

//Para servir los archivos de CSS y JS.
app.use(express.static('.'));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/conversor.html'));
});

app.get('/login',(req,res)=>{
    res.render('form');
});

//Cuando enviemos el formulario, se ejecutará este middleware.
app.post('/login', (req, res)=>{
  if(!req.body.username || !req.body.password){
    console.log('login failed');
    res.send('Login failed');
  } else if(req.body.username in users &&
            bcrypt.compareSync(req.body.password, users[req.body.username])){
              req.session.user = req.body.username;
              req.session.admin = true;
              res.redirect('/content');
            }else {
              console.log('login ${util.inspect(req.query)} fallido');
              res.send("No has podido loguear.");
            }
});

//Esta función comprueba que el usuario esté autenticado.
var auth = function(req, res, next) {
  if (req.session && req.session.user in users)
    return next();
  else
    return res.sendStatus(401);
};

//Cuando accedamos a la ruta "/content" y estemos autenticados, podremos leer el libro.
app.use( "/content", [ auth, express.static( __dirname + "/book" ) ] );

//Cuando accedamos a /logout, se nos eliminará la sesion.
app.get('/logout',(req,res) =>{
  req.session.destroy();
  res.send("logout exitoso!");
})

app.listen(port, (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Servidor corriendo en el puerto:', port);
})
