const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Venta = connection.sequelize.define(
    'cat_venta',
    {
        venta_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        venta_Numero_Factura: Sequelize.STRING,
        venta_Descripcion: Sequelize.STRING,
        venta_Descuento: Sequelize.DOUBLE,
        venta_Impuesto: Sequelize.DOUBLE,
        venta_Subtotal: Sequelize.DOUBLE,
        venta_Total: Sequelize.DOUBLE,
        venta_Fecha_Registo: Sequelize.DATE,
    },
    {
        tableName: 'cat_persona',
        timestamps: false,
        underscored: true,
    },
);
module.exports = Venta;
