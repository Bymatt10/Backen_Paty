const Categoria = require('../models/categoria');

module.exports = class CategoriaController {
  async list(req, res) {
    const list = await Categoria.findAll();
    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    res.send(categoria);
  }

  async create(req, res, next) {
    const {
      categoria_nombre,
    } = req.body;
    const categoria = await Categoria.create({
      categoria_nombre,
    });
    res.status(201).send(categoria);
  }
};
