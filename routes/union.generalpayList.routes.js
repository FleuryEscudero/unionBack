'use strict'

var express = require('express');
var cors = require('cors');

var uniongPayListController = require('../controllers/union.generalPayList.controller');

var api = express.Router();
var mdAuth = require('../middlewares/authenticate.middleware');


/* Configuracion de Cabeceras */


api.use(cors());


/* configuración de Rutas */

api.get('/getgPaylist/:id', mdAuth.ensureAuth, uniongPayListController.getgPayList);
api.get('/getgPaylists/', mdAuth.ensureAuth, uniongPayListController.getgPayLists);
api.post('/addgPayList', mdAuth.ensureAuth, uniongPayListController.savegPayList);
api.put('/updategPayList/:id', mdAuth.ensureAuth, uniongPayListController.updategPayList);
api.delete('/deletegPayList/:id', mdAuth.ensureAuth, uniongPayListController.deletegPayList);

module.exports = api;