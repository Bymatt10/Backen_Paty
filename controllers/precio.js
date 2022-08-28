const Precio = require('../models/precio');

module.exports = class PrecioController {
  async getAll(req, res) {
    const list = await Precio.findAll();
    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const precio = await Precio.findByPk(id);
    res.send(precio);
  }

  async create(req, res) {
    const {
      precio_Cantidad,
      precio_Tipo,

    } = req.body;
    const precio = await Precio.create({
      precio_Cantidad,
      precio_Tipo,

    });
    res.status(201).send(precio);
  }
};
