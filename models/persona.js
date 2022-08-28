const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Persona = connection.sequelize.define(
    'cat_persona',
    {
        persona_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        persona_nombre: Sequelize.STRING,
        persona_apellido: Sequelize.STRING,
        persona_genero: Sequelize.STRING,
        persona_correo: Sequelize.STRING,
        persona_telefono: Sequelize.INTEGER,
        persona_direccion: Sequelize.STRING,
        persona_estado: Sequelize.STRING,
    },
    {
        tableName: 'cat_persona',
        timestamps: false,
        underscored: true,
    },
);
module.exports = Persona;
