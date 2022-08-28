const express = require('express');

const  router = express.Router();
const PrecioController = require('../controllers/precio');


const precioController = new  PrecioController();
router.get('/',precioController.getAll);
router.post('/create',precioController.create);
module.exports = router;