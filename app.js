//Usado?: YES
const express = require('express'); //--- Explicación: Importa el framework Express para crear el servidor.
//Usado?: YES
const dotenv = require('dotenv'); //--- Explicación: Carga variables de entorno desde el archivo `.env`.
//Usado?: YES
const middlewares = require('./middlewares'); //--- Explicación: Importa las funciones middleware personalizadas.
//Usado?: YES
const routes = require('./routes'); //--- Explicación: Importa las rutas definidas de la app.

dotenv.config(); //Usado?: YES //--- Explicación: Inicializa las variables de entorno.

const app = express(); //Usado?: YES //--- Explicación: Crea una instancia de la app Express.

middlewares.setupAPP(app); //Usado?: YES //--- Explicación: Aplica los middlewares generales como body-parser y sesión.
routes.setup(app); //Usado?: YES //--- Explicación: Define las rutas que manejará la app.

const PORT = 4000; //Usado?: YES //--- Explicación: Puerto donde se ejecutará el servidor.

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
}); //Usado?: YES //--- Explicación: Lanza el servidor y muestra mensaje de confirmación.
