const router = require('express').Router();


const GastosController = require('../controllers/GastosController');


router.get('/gastos',GastosController.getAll);
router.get('/gasto/:id',GastosController.getById);
router.post('/gasto',GastosController.create);
router.put('/gasto/:id',GastosController.editById);
router.delete('/gasto/:id',GastosController.deletebyId);


module.exports = router;


 