const express = require('express');

const router = express.Router();
const AlmacenController = require('../controllers/almacen');

const almacenController = new AlmacenController();

router.get('/', almacenController.getAll);
router.post('/create', almacenController.create);

module.exports = router;
