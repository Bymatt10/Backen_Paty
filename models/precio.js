const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Precio = connection.sequelize.define(
  'cat_precio',
  {
    precio_Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    precio_Cantidad: Sequelize.INTEGER,
    precio_Tipo: Sequelize.INTEGER,
  },
  {
    tableName: 'cat_precio',
    timestamps: false,
    // underscored: true,
  },
);
module.exports = Precio;
