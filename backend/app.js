const express = require('express');
const bodyParser = require('body-parser');



const app = new express();


//Middlewares

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Archivos de rutas
const gastos_routes = require("./routes/gastos");
const ingresos_routes = require("./routes/ingresos");


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Rutas
app.use('/api',gastos_routes);
app.use('/api',ingresos_routes);







//Exportacion

module.exports = app;

