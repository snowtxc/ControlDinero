const { response } = require("express");
const con = require("../database");

var GastoModel = {
    save : function(payload,callback){
        sql = "INSERT INTO gastos(value,fecha,motivo,moneda) VALUES ('"+payload.value+"','"+payload.fecha+"','"+payload.motivo+"','"+payload.moneda+"')";
        con.query(sql,(err,result) => {
            if(err){
               callback(err);
            }

            callback(err,result);
        })


        
        
    },
    


    getAll : function(callback){

        let sql = "SELECT * FROM gastos ORDER BY fecha DESC";

        con.query(sql,(err,result) =>{
        
            if(err){
                callback(err);
            }
             

            callback(err,result);
        })
    },

    getById : function(id,callback){
        sql = "SELECT * FROM gastos WHERE id='"+id+"'";
        con.query(sql,(err,result) =>{
            if (err){
                callback(err);
            }

            callback(err,result);
        })


    },


    editById: function(id, payload,callback){
        sql = "UPDATE gastos SET value='"+payload.value+"', motivo='" +payload.motivo + "',moneda ='" +payload.moneda+ "' WHERE id='"+id+"'";
        con.query(sql,(err,result) =>{
            if(err) {callback(err)}

            callback(err,result);
        })
    },

    deletebyId: function(id,callback){
        sql = "DELETE FROM gastos WHERE id='"+id+"'";
        con.query(sql,(err,result) =>{
            if(err) {
                callback(err);
            }
            
            callback(err,result);

        })
    }
}

module.exports = GastoModel;