const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Producto = connection.sequelize.define(
  'cat_producto',
  {
    producto_cod: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    producto_cod_barra: Sequelize.STRING,
    producto_marca_cod: Sequelize.STRING,
    producto_nombre: Sequelize.STRING,
    producto_descripcion: Sequelize.STRING,
    producto_talla: Sequelize.STRING,
    producto_presentacion: Sequelize.STRING,
    producto_inventario_stock: Sequelize.INTEGER,
    producto_estado: Sequelize.STRING,
  },
  {
    tableName: 'cat_producto',
    timestamps: false,
    underscored: true,

  },
);
module.exports = Producto;
