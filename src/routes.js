var express = require('express');
var route = express();

const controller = require('./controller')

route.get('/index',controller.index);
route.get('/create',controller.create);

module.exports = route;
