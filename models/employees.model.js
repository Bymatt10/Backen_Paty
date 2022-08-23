const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Employee = connection.sequelize.define(
  'employees',
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    age: Sequelize.STRING,
    address: Sequelize.TEXT,
  },
  {
    tableName: 'employees',
    timestamps: false,

    underscored: true,
  },
);
module.exports = Employee;
