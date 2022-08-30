const express = require('express');

const router = express.Router();
const CategoriaController = require('../controllers/categoria');

const categoriaController = new CategoriaController();

router.get('/', categoriaController.list);
router.get('/:id', categoriaController.get);
router.post('/create', categoriaController.create);
// router.delete('/delete/:id', employeesController.delete)
module.exports = router;
