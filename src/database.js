// archivo que me permite conectar a la bbdd. Lo utilzaremos en index.js
require('dotenv').config();
const mongoose = require('mongoose');


const MONGO_URI = 'mongodb+srv://ronHemm:bobtow-nyXxe5-tuwfez@cluster0.8knv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//const MONGO_URI = process.env.URI;


mongoose.connect(MONGO_URI,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
    .then (db => console.log('MongoDB is connected! Books party!!'))
    .catch (error => console.error(error));

    module.exports = mongoose;