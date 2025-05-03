//Usado?: YES
const bodyParser = require('body-parser'); //--- Explicación: Permite leer los datos del body de los formularios.
//Usado?: YES
const session = require('express-session'); //--- Explicación: Permite manejar sesiones de usuario.

const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
}; //Usado?: YES //--- Explicación: Verifica si la palabra introducida es la correcta, si no redirige.

const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
}; //Usado?: YES //--- Explicación: Comprueba si hay una sesión activa antes de acceder a ciertas rutas.

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
}; //Usado?: YES //--- Explicación: Aplica los middlewares de bodyParser y session a la app.

module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
}; //Usado?: YES //--- Explicación: Exporta todos los middlewares y configuración para ser usados en app.js.
