// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const reader = require('../models/reader');

// router.get('/', (req, res) => {
//     books.find = (function (err, books){
//     console.log(books);
//     });
//     res.json({
//         status: 'API Works!'
//     });
// });

router.get('/', async (req, res) => {
     const Readers = await reader.find();
     res.json(Readers);
 });

router.get('/:id', async (req, res) => {
    const filterReaders = await reader.findById(req.params.id);
    res.json(filterReaders);
});

router.post('/', async (req, res) => {
    const { name, surname, email, opinions } = req.body;
    const readers = new reader ({name, surname, email, opinions});
    await readers.save();
    res.json ({status: 'Reader saved'});
});

router.put('/:id', async (req, res) => {
    const { name, surname, email, opinions} = req.body;
    const newReader = {name, surname, email, opinions};
    //console.log(req.params.id);
    await reader.findByIdAndUpdate (req.params.id, newReader);
    res.json ({status: 'Reader updated'});
});

router.delete ('/:id', async (req, res) => {
    await reader.findByIdAndRemove (req.params.id);
    res.json ({status: 'Reader deleted'});
});

module.exports = router;
