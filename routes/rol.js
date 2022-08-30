const express = require('express');

const router = express.Router();
const RolController = require('../controllers/rol');

const rolController = new RolController();

router.get('/', rolController.getAll);
router.get('/:id', rolController.get);
router.post('/create', rolController.create);
// router.delete('/delete/:id', rolController.delete)
module.exports = router;
