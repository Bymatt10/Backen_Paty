const almacenInve = require('../models/almacenInvent');

module.exports = class almacenInveController {
  async getAll(req, res) {
    const list = await almacenInve.findAll();

    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const almacenInvent = await almacenInve.findByPk(id);
    res.send(almacenInvent);
  }

  async create(req, res) {
    try {
      const {
        cantidad_Existente,
        cantidad_Maxima,
        cantidad_Minima,
        inventario_cod_marca,
        inventario_cod_barras,
        tipo_manipulacion,
        fechaRequerido,

      } = req.body;
      const almacenInvent = await almacenInve.create({
        cantidad_Existente,
        cantidad_Maxima,
        cantidad_Minima,
        inventario_cod_marca,
        inventario_cod_barras,
        tipo_manipulacion,
        fechaRequerido,
      });
      res.status(201).send(almacenInvent);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
};
