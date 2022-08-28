const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const  connection = new Connection();
const Almacen = connection.sequelize.define(
    'cat_almacen',
    {
        id_amc:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_almacen:Sequelize.STRING,
        direccion_almacen:Sequelize.STRING,
        amcinventario_estado :Sequelize.TINYINT
    },{
        tableName: 'cat_almacen',
        timestamps:false,
        underscored:true,
    },
);
module.exports = Almacen;