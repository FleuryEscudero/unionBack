'use strict'

var fs = require('fs');
var path = require('path');
var Employee = require('../models/union.employee.models');


function saveEmployee(req, res) {
    var employee = new Employee();
    var params = req.body;
    employee.noUnion = params.noUnion;
    employee.name1 = params.name1;
    employee.name2 = params.name2;
    employee.surname1 = params.surname1;
    employee.surname2 = params.surname2;
    employee.payListId = params.payListId;

    employee.save((err, employeeStored) => {
        if (err) {
            res.status(500).send({
                message: `Error al guardar el empleado ${employee.name1} ${employee.surname1}`
            });
        } else {
            if (!employeeStored) {
                res.status(500).send({
                    message: `Error al guardar el empleado`
                });
            } else {
                res.status(200).send({
                    employee: employeeStored
                })
            }
        }
    });

};


function getEmployee(req, res) {
    var employeeId = req.params.id;

    Employee.findById(employeeId, {
            status:1
        })
        .populate({
            path: 'payList'
        }).exec((err, payList) => {
            if (err) {
                res.status(500).send({
                    message: `Error en la petición`
                });
            } else {
                if (!payList) {
                    console.log(!employeeId);
                    res.status(404).send({
                        message: 'La lista de pago no existe'
                    })
                } else {
                    res.status(200).send({
                        payList
                    })
                }
            }
        })

}


function getEmployees(req, res) {

    var payListId = req.params.payList;

    if (!payListId) {
        var find = Employee.find({}).sort('noUnion');
    } else {
        var find = Employee.find({
            payList: payListId
        }).sort('noUnion');
    }


    find.populate({
        path: 'payList'
    }).exec((err, payLists) => {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!payLists) {
                res.status(404).send({
                    message: `Este empleado no esta asociado a ninguna lista de pago`
                });
            } else {
                res.status(200).send({
                    payLists
                });
            }
        }
    });
}


function updateEmployee(req, res) {
    var employeeId = req.params.id;
    var update = req.body;

    Employee.findByIdAndUpdate(employeeId, update, (err, employeeUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!employeeUpdated) {
                res.status(404).send({
                    message: 'No existe el empleado'
                });
            } else {
                res.status(200).send({
                    employee: employeeUpdated
                });
            }
        }
    });
}


function deleteEmployee(req, res) {
    var employeeId = req.params.id;
    var nstatus = {
        status: 0
    }

    Employee.findByIdAndUpdate(employeeId, nstatus, {
        new: 0
    }, (err, employeeDeleted) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (!employeeDeleted) {
                res.status(404).send({
                    message: 'No existe el empleado'
                });
            } else {
                res.status(200).send({
                    employee: employeeDeleted
                });
            }
        }
    })
}


module.exports = {
    saveEmployee,
    getEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee

}