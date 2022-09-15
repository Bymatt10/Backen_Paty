const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Usuario = connection.sequelize.define(
    'cat_usuario',
    {
        usuario_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_cod: Sequelize.STRING,
        usuario_nomb_usuario: Sequelize.STRING,
        usuario_contrasena: Sequelize.STRING,
    },
    {
        tableName: 'cat_usuario',
        timestamps: false,
    },
);
module.exports = Usuario;
