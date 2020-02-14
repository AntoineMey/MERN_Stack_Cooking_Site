const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
name:{
type: String,
required: true,
unique: true
},
email:{
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
},
postal:{
type: Number,
required: true
},
receipts:{
type: Array,
default: undefined
}
});

module.exports = User = mongoose.model('user', UserSchema);
