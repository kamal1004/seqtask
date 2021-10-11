var Sequelize = require('sequelize');

const database = new Sequelize(
  'postgres', // db
  'postgres', //u name
  '123456789@K', //pass
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

database.sync()

module.exports = database;
