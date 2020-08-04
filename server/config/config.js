//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;

//====================
// Entorno
//====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
// Base de datos
//====================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI; //Esta variable es la que seete en heroku, para que en github no se viera mi conexion
}


process.env.URLDB = urlDB; //publicamos la variable que tiene la ruta de conexion para usarla en server.js