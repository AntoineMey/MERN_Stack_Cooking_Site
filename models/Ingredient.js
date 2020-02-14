const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
name:{
type: String,
required: true,
unique: true
}
});

module.exports = User = mongoose.model('ingredient', IngredientSchema);
