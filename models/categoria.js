const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Categoria = connection.sequelize.define('cat_categoria', {
  categoria_cod: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoria_nombre: Sequelize.STRING,
}, {
  tableName: 'cat_categoria',
  timestamps: false,
});
module.exports = Categoria;
