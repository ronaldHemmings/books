// diseñar esqueña de nuestros datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title:  { type: String, required: true},
    author: { type: String, required: true},
    ISBN: { type: String, required: true},
    genre: { type: String, required: true}
    // date: { type: date, required: true},
    // numPages: { type: Number, required: true},
    // edition: { type: String, required: false},
    // language: {type: Array, required: true},
    // editorial: { type: String, required: true}, 
});

module.exports = mongoose.model('book', bookSchema);