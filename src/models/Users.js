
var Sequelize = require('sequelize');

var sequelize = require('../database');

var Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  age: Sequelize.STRING
});

module.exports = Users;
