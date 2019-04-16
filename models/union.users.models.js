'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnionUserSchema = Schema ({id:Number,
                                name:String,
                                surname:String,
                                email:String,
                                password:String,
                                role:String,
                                image:String
                                });                 


module.exports = mongoose.model('UnionUser',UnionUserSchema);