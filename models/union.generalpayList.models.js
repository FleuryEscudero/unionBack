'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneralUnionPaylistSchema = Schema ({id:Number,
                                title:String,
                                description:String,
                                month:Number,
                                weeks:Number,
                                year:Number,
                                employeeId:{type:Schema.ObjectId, ref:'UnionEmployee'},
                                paylistId:{type:Schema.ObjectId, ref:'UnionPaylist'},
                                status: {type: Number, default:1}
                                });                 


module.exports = mongoose.model('GeneralUnionPaylist',GeneralUnionPaylistSchema);