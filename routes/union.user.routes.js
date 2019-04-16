'use strict'

var express = require('express');
var cors = require('cors');

var unionUsercontroller = require ('../controllers/union.user.controller');

var api = express.Router();
var mdAuth = require ('../middlewares/authenticate.middleware');

var multipart = require ('connect-multiparty');
var mdUpload = multipart({uploadDir: './uploads/users'});


/* Configuracion de Cabeceras */


api.use(cors());


/* configuración de Rutas */

api.get('/pruebas', unionUsercontroller.pruebas);


module.exports = api;