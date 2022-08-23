const express = require('express');

const router = express.Router();
const EmployeesController = require('../controllers/employees.controller');

const employeesController = new EmployeesController();

router.get('/', employeesController.list);
router.get('/:id', employeesController.get);
router.post('/create', employeesController.create);
// router.delete('/delete/:id', employeesController.delete)
module.exports = router;
