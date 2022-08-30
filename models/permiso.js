const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Permiso = connection.sequelize.define('cat_permiso', {
    permiso_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    permiso_nombre: Sequelize.STRING,
}, {
    tableName: 'cat_permiso',
    timestamps: false,
});
module.exports = Permiso;
