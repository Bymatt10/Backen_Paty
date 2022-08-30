const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Inventario = connection.sequelize.define(
  'almacen_inventario',
  {
    id_amcinventario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventario_producto_cod: Sequelize.INTEGER,
    cantidad_Existente: Sequelize.INTEGER,
    cantidad_Maxima: Sequelize.INTEGER,
    cantidad_Minima: Sequelize.INTEGER,
    inventario_cod_marca: Sequelize.INTEGER,
    inventario_cod_barras: Sequelize.STRING,
    tipo_manipulacion: {
      type: Sequelize.ENUM('VENTA', 'COMPRA', 'TRASLADO', 'REGISTRO'),
      defaultValue: 'REGISTRO',
    },
    fechaRequerido: Sequelize.DATE,
  },
  {
    tableName: 'almacen_inventario',
    timestamps: false,
  },
);
module.exports = Inventario;
