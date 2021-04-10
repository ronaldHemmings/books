// archivo que me permite conectar a la bbdd. Lo utilzaremos en index.js
const mongoose = require('mongoose');

//const uri = 'mongodb+srv://ronHemm:bobtow-nyXxe5-tuwfez@cluster0.8knv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const uri = process.env.URI;

mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
    .then (db => console.log('MongoDB is connected! Books party!!'))
    .catch (error => console.error(error));

    module.exports = mongoose;