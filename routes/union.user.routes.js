'use strict'

var express = require('express');
var cors = require('cors');

var unionUsercontroller = require('../controllers/union.user.controller');

var api = express.Router();
var mdAuth = require('../middlewares/authenticate.middleware');

var multipart = require('connect-multiparty');
var mdUpload = multipart({
    uploadDir: './uploads/users'
});


/* Configuracion de Cabeceras */


api.use(cors());


/* configuración de Rutas */

api.get('/pruebas', unionUsercontroller.pruebas);
api.post('/addUser', unionUsercontroller.saveUser);
api.post('/login', unionUsercontroller.loginUser);
api.put('/updateUser/:id',mdAuth.ensureAuth, unionUsercontroller.updateUser);
api.post('/uploadImage/:id',[mdAuth.ensureAuth, mdUpload], unionUsercontroller.uploadImage);
api.get('/getImageUser/:imageFile', unionUsercontroller.getImageFile);

module.exports = api;