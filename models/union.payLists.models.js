'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnionPaylistSchema = Schema ({id:Number,
                                title:String,
                                description:String,
                                month:String,
                                week:String,
                                status: {type: Number, default:1}
                                });                 


module.exports = mongoose.model('UnionPaylist',UnionPaylistSchema);