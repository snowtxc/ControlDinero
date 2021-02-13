const router = require('express').Router();

const IngresosController = require("../controllers/IngresosController");

router.get('/ingresos',IngresosController.getAll);
router.get('/ingreso/:id',IngresosController.getById);
router.post('/ingreso',IngresosController.create);
router.put('/ingreso/:id',IngresosController.editById);
router.delete('/ingreso/:id',IngresosController.deletebyId);


module.exports = router;