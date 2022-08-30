const express = require('express');

const router = express.Router();
const ProveedorController = require('../controllers/proveedor');

const proveedorController = new ProveedorController();

router.get('/', proveedorController.getAll);
router.get('/:id', proveedorController.get);
router.post('/create', proveedorController.create);
// router.delete('/delete/:id', proveedorController.delete)
module.exports = router;
