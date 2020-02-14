const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
ingredients:{
type: Array,
required: true,
unique: true
},
difficulty:{
type: Array,
required: true,
unique: true
},
categories: {
type: Array,
required: true
},
time:{
type: Number,
required: true,
unique: true
},
notes:{
type: Array,
required: true,
unique: true
},
comments:{
type: Array
},
description:{
type: String,
required: true,
unique: true
},
date:{
type: Date
}
});

module.exports = User = mongoose.model('receipt', ReceiptSchema);
