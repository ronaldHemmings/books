// Este archivo (node.js) nos va a permitir crear/iniciar nuestro servidor

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

// para añadir el modulo dotenv


//console.log(process.env);

//Settings
app.set ('port', process.env.PORT || 3000)

//Middlewares (funciones que se ejecutan antes de que lleguen a nuestras rutas)
app.use(morgan('dev'));
app.use(express.json()); 
//Routes
app.use('/api/books' ,require('./routes/book.routes'));
app.use('/api/authors' ,require('./routes/authors.routes'));
app.use('/api/readers' ,require('./routes/readers.routes'));
app.use('/api/editorials' ,require('./routes/editorials.routes'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));



//Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

});