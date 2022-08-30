const express = require('express');

const router = express.Router();
const MetodoPagoController = require('../controllers/metodoPago');

const metodoPagoController = new MetodoPagoController();

router.get('/', metodoPagoController.getAll);
router.get('/:id', metodoPagoController.get);
router.post('/create', metodoPagoController.create);
// router.delete('/delete/:id', metodoPagoController.delete)
module.exports = router;
