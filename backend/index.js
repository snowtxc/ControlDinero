const mysql = require('./database');
const app = require('./app');

//Models
const ingresoModel = require("./models/Ingreso");
const gastoModel = require('./models/Gasto');


const port = 3701;


app.listen(port,function(){
    console.log("Servidor iniciado!!");


 
})