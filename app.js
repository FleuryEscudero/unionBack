'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();


//cargar rutas

var unionUserRoutes = require('./routes/union.user.routes');
var unionEmployeeRoutes = require('./routes/union.employee.routes');
var unionPayListRoutes = require('./routes/union.payLists.routes');

//body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//configurar CORS
app.use(cors());

//rutas base

app.use('/api', unionUserRoutes);
app.use('/api', unionEmployeeRoutes);
app.use('/api', unionPayListRoutes);
module.exports = app;