var Sequelize = require('sequelize');

const database = new Sequelize(
  'task', // name database
  'Kamal', // user database
  'Defence@0821', // password database
  {
    host: 'localhost',
    dialect: 'mysql' // mariadb / sqlite / postgres
  }
);

database.sync()

module.exports = database;
