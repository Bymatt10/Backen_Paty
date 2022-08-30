const express = require('express');

const router = express.Router();
const AlmacenInvController = require('../controllers/almacenInvent');

const almacenInvController = new AlmacenInvController();

router.get('/', almacenInvController.getAll);
router.post('/create', almacenInvController.create);

module.exports = router;
