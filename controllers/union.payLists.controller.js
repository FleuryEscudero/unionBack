'use strict'

var fs = require('fs');
var path = require('path');
var PayList = require('../models/union.payLists.models');


function savePayList(req, res) {
    var payList = new PayList();
    var params = req.body;
    payList.id = params.id;
    payList.title = params.title;
    payList.description = params.description;
    payList.month = params.month;
    payList.week = params.week;


    PayList.save((err, payListStored) => {
        if (err) {
            res.status(500).send({
                message: `Error al guardar la lista de pago ${payList.title}`
            });
        } else {
            if (!payListStored) {
                res.status(500).send({
                    message: `Error al guardar la Lista de Pago`
                });
            } else {
                res.status(200).send({
                    payList: payListStored
                })
            }
        }
    });

};


function getPayList(req, res) {
    var payListId = req.params.id;

    PayList.findById(payListId, (err, paylist) => {
        if(err){
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!paylist){
                res.status(404).send({message:'La Lista de Pago no existe'})
            }else{
                res.status(200).send({paylist});
            }
        }
    })


}


function getPayLists(req, res) {
   
    
    PayList.find((err,paylists)=>{
        if(err){
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!paylists){
                res.status(404).send({message:'La Lista de Pago no existe'})
            }else{
                res.status(200).send({paylists});
            }
        }
    })
}


function updatePayList(req, res) {
    var payListId = req.params.id;
    var update = req.body;

    PayList.findByIdAndUpdate(payListId, update, (err, payListUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!payListUpdated) {
                res.status(404).send({
                    message: 'No existe la lista de pago'
                });
            } else {
                res.status(200).send({
                    paylist: payListUpdated
                });
            }
        }
    });
}


function deletePayList(req, res) {
    var payListId = req.params.id;
    var nstatus = {
        status: 0
    }

    PayList.findByIdAndUpdate(payListId, nstatus, {
        new: 0
    }, (err, payListDeleted) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!payListDeleted) {
                res.status(404).send({
                    message: 'No existe la lista de pago'
                });
            } else {
                res.status(200).send({
                    paylist: payListDeleted
                });
            }
        }
    })
}


module.exports = {
    savePayList,
    getPayList,
    getPayLists,
    updatePayList,
    deletePayList

}