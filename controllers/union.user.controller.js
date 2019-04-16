'use strict'

var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/union.users.models');
var jwt = require('../services/jwt.services');


function pruebas(req, res) {
    res.status(200).send({
        menssage: 'Esta ruta es de prueba en mi api restful con mongo y node de musify'
    });
};


module.exports = {
    pruebas
}