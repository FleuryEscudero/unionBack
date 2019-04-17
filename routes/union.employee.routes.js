'use strict'

var express = require('express');
var cors = require('cors');

var unionEmployeecontroller = require('../controllers/union.employee.controller');

var api = express.Router();
var mdAuth = require('../middlewares/authenticate.middleware');


/* Configuracion de Cabeceras */


api.use(cors());


/* configuración de Rutas */

api.get('/getEmployee/:id', mdAuth.ensureAuth, unionEmployeecontroller.getEmployee);
api.get('/getEmployees/:payListId?', mdAuth.ensureAuth, unionEmployeecontroller.getEmployees);
api.post('/addEmployee', mdAuth.ensureAuth, unionEmployeecontroller.saveEmployee);
api.put('/updateEmployee/:id', mdAuth.ensureAuth, unionEmployeecontroller.updateEmployee);
api.delete('/deleteEmployee/:id', mdAuth.ensureAuth, unionEmployeecontroller.deleteEmployee);

module.exports = api;