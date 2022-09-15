const express = require('express');

const router = express.Router();
const UsuarioController = require('../controllers/usuario');

const usuarioController = new UsuarioController();

// router.get('/', usuarioController.getAll);
router.post('/create', usuarioController.create);

module.exports = router;
