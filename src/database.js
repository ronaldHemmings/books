// archivo que me permite conectar a la bbdd. Lo utilzaremos en index.js
const mongoose = require('mongoose');

const uri = process.env.uri;

mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
    .then (db => console.log('MongoDB is connected! Books party!!'))
    .catch (error => console.error(error));

    module.exports = mongoose;