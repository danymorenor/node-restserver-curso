require('./config/config');


const express = require('express');
const mongoose = require('mongoose');



const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


//Sustituir la cadena de conexion por la variable dependiendo del ambiente, 
//esta variable se setea en config.js
//mongoose.connect('mongodb://localhost:27017/cafe', {
mongoose.connect(process.env.URLDB, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE!');
});

// mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
//     if (err) throw err;

//     console.log('Base de datos ONLINE!');
// });



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});