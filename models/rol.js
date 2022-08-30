const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Rol = connection.sequelize.define(
    'cat_rol',
    {
        rol_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rol_nombre: Sequelize.STRING,
    },
    {
        tableName: 'cat_rol',
        timestamps: false,
    },
);
module.exports = Rol;
