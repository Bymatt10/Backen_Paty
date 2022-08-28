const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Precio = connection.sequelize.define(
    'cat_precio',
    {
        precioId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precioCantidad: Sequelize.INTEGER,
        precioTipo: Sequelize.INTEGER,
    },
    {
        tableName: 'cat_precio',
        timestamps: false,
        underscored: true,
    },
);
module.exports = Precio;
