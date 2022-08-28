const express = require('express');

const router = express.Router();
const ProductoController = require('../controllers/producto');

const productoController = new ProductoController();

router.get('/', productoController.list);
router.get('/:id', productoController.get);
router.post('/create', productoController.create);
// router.delete('/delete/:id', productoController.delete)
module.exports = router;
