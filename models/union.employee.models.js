'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnionEmployeeSchema = Schema ({id:Number,
                                noUnion:Number,
                                name1:String,
                                name2:String,
                                surname1:String,
                                surname2:String,
                                payListId:{type: SchemaObjectId, ref: 'UnionPaylist'}
                                });                 


module.exports = mongoose.model('UnionEmployee',UnionEmployeeSchema);