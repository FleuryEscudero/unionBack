'use strict'

var fs = require('fs');
var path = require('path');
var gPayList = require('../models/union.generalpayList.models');


function savegPayList(req, res) {
    var gpayList = new PayList();
    var params = req.body;
    gpayList.id = params.id;
    gpayList.title = params.title;
    gpayList.description = params.description;
    gpayList.month = params.month;
    gpayList.weeks = params.week;
    gpayList.year = params.year;


    gPayList.save((err, gpayListStored) => {
        if (err) {
            res.status(500).send({
                message: `Error al guardar la lista de pago ${gpayList.title}`
            });
        } else {
            if (!gpayListStored) {
                res.status(500).send({
                    message: `Error al guardar la Lista de Pago`
                });
            } else {
                res.status(200).send({
                    gpayList: gpayListStored
                })
            }
        }
    });

};


function getgPayList(req, res) {
    var gpayListId = req.params.id;

    gPayList.findById(gpayListId, (err, paylist) => {
        if(err){
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!gpaylist){
                res.status(404).send({message:'La Lista de Pago no existe'})
            }else{
                res.status(200).send({gpaylist});
            }
        }
    })


}


function getgPayLists(req, res) {
   
    
    gPayList.find((err,gpaylists)=>{
        if(err){
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!gpaylists){
                res.status(404).send({message:'La Lista de Pago no existe'})
            }else{
                res.status(200).send({gpaylists});
            }
        }
    })
}


function updategPayList(req, res) {
    var gpayListId = req.params.id;
    var update = req.body;

    gPayList.findByIdAndUpdate(gpayListId, update, (err, gpayListUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!gpayListUpdated) {
                res.status(404).send({
                    message: 'No existe la lista de pago'
                });
            } else {
                res.status(200).send({
                    gpaylist: gpayListUpdated
                });
            }
        }
    });
}


function deletegPayList(req, res) {
    var gpayListId = req.params.id;
    var nstatus = {
        status: 0
    }

    gPayList.findByIdAndUpdate(gpayListId, nstatus, {
        new: 0
    }, (err, gpayListDeleted) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!gpayListDeleted) {
                res.status(404).send({
                    message: 'No existe la lista de pago'
                });
            } else {
                res.status(200).send({
                    gpaylist: gpayListDeleted
                });
            }
        }
    })
}


module.exports = {
    savegPayList,
    getgPayList,
    getgPayLists,
    updategPayList,
    deletegPayList

}