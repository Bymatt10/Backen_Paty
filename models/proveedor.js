const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Proveedor = connection.sequelize.define(
    'cat_proveedor',
    {
        proveedor_Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        proveedor_razon_social: Sequelize.STRING,
        proveedor_Nombre: Sequelize.STRING,
        proveedor_Telefono: Sequelize.INTEGER,
        proveedor_descripcion: Sequelize.STRING,
        proveedor_Correo: Sequelize.INTEGER,
    },
    {
        tableName: 'cat_proveedor',
        timestamps: false,
    },
);
module.exports = Proveedor;
