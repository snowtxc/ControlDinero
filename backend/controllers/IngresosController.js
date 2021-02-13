const IngresoModel  = require("../models/Ingreso");

var IngresosController = {
    create : function(request,response){
        let body = request.body;

        console.log(body);

        var payload = {
            value : body.value,
            moneda : body.moneda,
            motivo : body.motivo,
            fecha : new Date().toISOString().slice(0, 19).replace('T', ' ')
        }

        IngresoModel.save(payload,(err,result) =>{
            if(err){
                response.status(500).send({
                    status: 'error',
                    message: 'Ha ocurrido un error',
                    error: error
                })
            }
            response.status(200).send({
                status: 'succes',
                message: 'Ingreso insertado correctamente'
            })
        });
          
       
    },
    


    getAll : function(request,response){

        IngresoModel.getAll((err,result) =>{
          
            if(err){
                response.status(500).send({
                    status: 'error',
                    message: 'Ha ocurrido un error inesperado',
                    error: err
                });
            }else if(result.length == 0){
                response.status(200).send({
                    status: 'not found',
                    message: 'No se encontro ningun ingreso'
                })
            }else if(result.length > 0){
                response.status(200).send({
                    status: 'succes',
                    result: result,
                })

            }

            
            
        });



      
    },

    getById : function(request,response){
      
        let params = request.params;
        let id = params.id;



        IngresoModel.getById(id,(err,result) =>{
            if(err){
                response.status(500).send({
                    status: 'error',
                    message: "Ha ocurrido un error inesperado",
                    error: err
                });
            }else if(result.length == 0){
                response.status(200).send({
                    status: 'not found',
                    message: 'No se encontro ningun ingreso con este id'
                })
            }else if(result.length > 0){
                response.status(200).send({
                    status: 'succes',
                    result: result
                })
                

            }


        
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

            IngresoModel.editById(id,payload,(err,result) =>{
                if(err){
                    response.status(500).send({
                        status: 'error',
                        message: 'Ha ocurrido un error'

                    })
                }else if(result.affectedRows == 0){
                    response.status(200).send({
                        status: 'not exist',
                        message: 'No existe el ingreso que se intenta eliminar'
                    })
                }else if(result.affectedRows > 0){
                    response.status(200).send({
                        status: 'succes',
                        message: 'Ingreso actualizado correctamente'
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

         IngresoModel.deletebyId(id,(err,result) =>{
                
                if(err){

                    response.status(500).send({
                        status: 'error',
                        message: 'Ha ocurrido un error'
                        

                    })
                }else if(result.affectedRows == 0){
                    response.status(200).send({
                        status: 'not exist',
                        message: 'No existe el ingreso que se intenta eliminar'
                    })
                }else if(result.affectedRows > 0){
                    response.status(200).send({
                        status: 'succes',
                        message: 'Ingreso eliminado correctamente'
                    })
                }

        })
    }
        
}


module.exports = IngresosController;