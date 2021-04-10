// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const authors = require('../models/author');

// router.get('/', (req, res) => {
//     books.find = (function (err, books){
//     console.log(books);
//     });
//     res.json({
//         status: 'API Works!'
//     });
// });

router.get('/', async (req, res) => {
     const Authors = await authors.find();
     res.json(Authors);
 });

router.get('/:id', async (req, res) => {
    const filterAuthor = await authors.findById(req.params.id);
    res.json(filterAuthor);
});

router.post('/', async (req, res) => {
    const { name, surname, email, address, phone, birthDate, proWriter } = req.body;
    const author = new authors ({name, surname, email, address, phone, birthDate, proWriter });
    await author.save();
    res.json ({status: 'Author saved'});
});

router.put('/:id', async (req, res) => {
    const { name, surname, email, address, phone, birthDate, proWriter } = req.body;
    const newAuthor = {name, surname, email, address, phone, birthDate, proWriter};
    //console.log(req.params.id);
    await authors.findByIdAndUpdate (req.params.id, newAuthor);
    res.json ({status: 'Author updated'});
});

router.delete ('/:id', async (req, res) => {
    await authors.findByIdAndRemove (req.params.id);
    res.json ({status: 'Author deleted'});
});

module.exports = router;
