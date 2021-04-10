// diseñar esqueña de nuestros datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const editorialSchema = new Schema({
    name:  { type: String, required: true},
    email: { type: String, required: true},
    NIF: { type: String, required: true},
    // genre: { type: String, required: true}
    // date: { type: date, required: true},
    // numPages: { type: Number, required: true},
    // edition: { type: String, required: false},
    // language: {type: Array, required: true},
    // editorial: { type: String, required: true}, 
});

module.exports = mongoose.model('editorial', editorialSchema);