// diseñar esqueña de nuestros datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
    name:  { type: String, required: true},
    surname: { type: String, required: true},
    email: { type: String, required: true},
    // address: { type: String, required: true},
    // phone: { type: Number, required: false},
    // birthDate: { type: Date, required: true},
    // proWriter: {type: Boolean, required: true} 
});

module.exports = mongoose.model('author', authorSchema);