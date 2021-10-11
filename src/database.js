var Sequelize = require('sequelize');

const database = new Sequelize(
  'task', // db
  'postgres', //u name
  'Defence@0821', //pass
  {
    host: 'localhost',
    dialect: 'postgres' 
  }
);

database.sync()

module.exports = database;
