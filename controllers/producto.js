const Producto = require('../models/producto');

module.exports = class ProductoController {
  async list(req, res) {
    const list = await Producto.findAll();
    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    res.send(producto);
  }

  async create(req, res) {
    const {
      producto_cod_barra,
      producto_marca_cod,
      producto_nombre,
      producto_descripcion,
      producto_talla,
      producto_presentacion,
      producto_inventario_stock,
    } = req.body;
    const producto = await Producto.create({
      producto_cod_barra,
      producto_marca_cod,
      producto_nombre,
      producto_descripcion,
      producto_talla,
      producto_presentacion,
      producto_inventario_stock,
    });
    res.status(201).send(producto);
  }
};
