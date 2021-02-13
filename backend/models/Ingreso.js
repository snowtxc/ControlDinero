const con = require('../database');

var IngresoModel = {
    save : function(payload,callback){
        let sql = "INSERT INTO ingresos(value,fecha,motivo,moneda) VALUES('"+payload.value+"','"+payload.fecha+"','"+payload.motivo+"','"+payload.moneda+"')";
        con.query(sql,(err,result) =>{
            if (err){
                callback(err);
             }

            callback(err,result);

        })
    },
    


    getAll : function(callback){

        let sql = "SELECT * FROM ingresos ORDER BY fecha DESC";

        con.query(sql,(err,result) =>{
            if(err) {callback(err)}

            callback(err,result);
        })
    },

    getById : function(id,callback){
        sql = "SELECT * FROM ingresos WHERE id='"+id+"'";
        console.log(sql)
        con.query(sql,(err,result) =>{
            if (err){ callback(err);}
            
            callback(err,result);
        })


    },


    editById: function(id, payload,callback){
        sql = "UPDATE ingresos SET value='"+payload.value+"', motivo='" +payload.motivo + "',moneda ='" +payload.moneda+ "' WHERE id='"+id+"'";
        con.query(sql,(err,result) =>{
            if(err){ callback(err);}

            callback(err,result);
        })
    },

    deletebyId: function(id,callback){
        sql = "DELETE FROM ingresos WHERE id='"+id+"'";
        con.query(sql,(err,result) =>{
            if(err) { callback(err);}
            
            callback(err,result);
        })
    }
}

module.exports = IngresoModel;