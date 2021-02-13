'use strict'

const e = require('express');
const GastoModel = require('../models/Gasto');

var GastoController = {
    create : function(request,response){
    
        let body = request.body;

        var payload = {
            value : body.value,
            moneda : body.moneda,
            motivo : body.motivo,
            fecha : new Date().toISOString().slice(0, 19).replace('T', ' ')
        }

        GastoModel.save(payload,(err,result) =>{
            if(err){
                console.log("Entra error");                
                response.status(500).send({
                    status: 'error',
                    message: 'Ha ocurrido un error',
                    error: error
                })
            }
            response.status(200).send({
                status: 'succes',
                message: 'Gasto insertado correctamente'
            })
        });
          
       
    },
    


    getAll : function(request,response){

        GastoModel.getAll((err,result) =>{
          
            if(err){
                response.status(500).send({
                    status: 'error',
                    message: 'Ha ocurrido un error inesperado',
                    error: err
                });
            }else if(result.length == 0){
                response.status(200).send({
                    status: 'not found',
                    message: 'No se encontro ningun gasto'
                })
            }else if(result.length > 0){
                response.status(200).send({
                    status: 'succes',
                    result: result
                })

            }

           
            
        });



      
    },

    getById : function(request,response){
        let params = request.params;
        let id = params.id;



        GastoModel.getById(id,(err,result) =>{
            if(err){
                response.status(500).send({
                    status: 'error',
                    message: "Ha ocurrido un error inesperado",
                    error: err
                });
            }else if(result.length == 0){
                response.status(200).send({
                    status: 'not found',
                    message: 'No se encontro ningun gasto con este id'
                })
            }


            response.status(200).send({
                status: 'succes',
                result: result
            })
            
        });
    
    },


    editById: function(request,response){
        let id = request.params.id;
        if(id){
            let body = request.body;
            
            let payload = {
                value: body.value,
                moneda: body.moneda,
                motivo: body.motivo
            }

            GastoModel.editById(id,payload,(err,result) =>{
                if(err){
                    response.status(500).send({
                        status: 'error',
                        message: 'Ha ocurrido un error'

                    })
                }else if(result.affectedRows == 0){
                    response.status(200).send({
                        status: 'not exist',
                        message: 'No existe el gasto que se intenta eliminar'
                    })
                }else if(result.affectedRows > 0){
                    response.status(200).send({
                        status: 'succes',
                        message: 'gasto editado correctamente'
                    })
                }


            })  
        }else{
            response.status(200).send({
                status : 'not found',
                message : "Id invalido"
            })

        }
        
      



       
    },

    deletebyId: function(request,response){
        let id =  request.params.id;

         GastoModel.deletebyId(id,(err,result) =>{
                
                if(err){

                    response.status(500).send({
                        status: 'error',
                        message: 'Ha ocurrido un error'
                        

                    })
                }else if(result.affectedRows == 0){
                    response.status(200).send({
                        status: 'not exist',
                        message: 'No existe el gasto que se intenta eliminar'
                    })
                }else if(result.affectedRows > 0){
                    response.status(200).send({
                        status: 'succes',
                        message: 'gasto eliminado correctamente'
                    })
                }

        })
    }
        
      


}



module.exports  = GastoController;