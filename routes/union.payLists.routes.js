'use strict'

var express = require('express');
var cors = require('cors');

var unionPayListController = require('../controllers/union.payLists.controller');

var api = express.Router();
var mdAuth = require('../middlewares/authenticate.middleware');


/* Configuracion de Cabeceras */


api.use(cors());


/* configuración de Rutas */

api.get('/getPaylist/:id', mdAuth.ensureAuth, unionPayListController.getPayList);
api.get('/getPaylists/', mdAuth.ensureAuth, unionPayListController.getPayLists);
api.post('/addPayList', mdAuth.ensureAuth, unionPayListController.savePayList);
api.put('/updatePayList/:id', mdAuth.ensureAuth, unionPayListController.updatePayList);
api.delete('/deletePayList/:id', mdAuth.ensureAuth, unionPayListController.deletePayList);

module.exports = api;