const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const MetodoPago = connection.sequelize.define('cat_metodopago', {
    metodopago_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    metodopago_nombre: {
        type: Sequelize.ENUM('TARJETA_CREDITO', 'TARJETA_DEBITO', 'CHEQUE', 'EFECTIVO', 'DEPOSITO', 'BANCARIO', 'PAYPAL'),
        defaultValue: 'PAYPAL',
    },
    
}, {
    tableName: 'cat_metodopago',
    timestamps: false,
});
module.exports = MetodoPago;
