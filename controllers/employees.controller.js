const Employees = require('../models/employees.model');

module.exports = class EmployeesController {
  async list(req, res) {
    const list = await Employees.findAll();
    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const employee = await Employees.findByPk(id);
    res.send(employee);
  }

  async create(req, res, next) {
    const {
      name,
      last_name,
      age,
      address,
    } = req.body;
    if (!name) return res.status(400).send({ message: 'El nombre es requerido' });

    const employee = await Employees.create({
      name,
      last_name,
      age,
      address,
    });
    res.status(201).send(employee);
  }
};
