const express = require('express');

const router = express.Router();
const PermisoController = require('../controllers/permiso');

const permisoController = new PermisoController();

router.get('/', permisoController.getAll);
router.get('/:id', permisoController.get);
router.post('/create', permisoController.create);
// router.delete('/delete/:id', permisoController.delete)
module.exports = router;
