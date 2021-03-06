// diseñar esqueña de nuestros datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author" // Esto apunta a la exportación del model de author.js
    },
    ISBN: { type: String, required: true},
    genre: { type: String, required: true}
    // date: { type: date, required: true},
    // numPages: { type: Number, required: true},
    // edition: { type: String, required: false},
    // language: {type: Array, required: true},
    // editorial: { type: String, required: true}, 
});

module.exports = mongoose.model('Book', BookSchema);

