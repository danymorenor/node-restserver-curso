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
    urlDB = 'mongodb+srv://strider:BtFLYjCidkTqIwRt@cluster0.rxn5h.mongodb.net/cafe';
}


process.env.URLDB = urlDB; //publicamos la variable que tiene la ruta de conexion para usarla en server.js