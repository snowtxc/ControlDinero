const { response } = require("express");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "controldinero"
});


con.connect(function(err){
    if (err){
        response.status(200).send({
            status: 'error',
            message: 'Ha ocurrido un error inesperado'
        })
    }

})


module.exports = con;