// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const editorials = require('../models/editorial');

// router.get('/', (req, res) => {
//     books.find = (function (err, books){
//     console.log(books);
//     });
//     res.json({
//         status: 'API Works!'
//     });
// });

router.get('/', async (req, res) => {
     const Editorial = await editorials.find();
     res.json(Editorial);
 });

router.get('/:id', async (req, res) => {
    const filterEditorial = await editorials.findById(req.params.id);
    res.json(filterEditorial);
});

//router.post('/newbook', (req, res) => {
//     // const { title, author, ISBN, genre} = req.body;
//     const newBook = new books({title, author, ISBN, genre});
//     newBook.save().then(book => res.json(book))
    
// });

// router.post('/', (req, res) => {
//     const { name, email, NIF} = req.body;
//     const Editorial = new editorial ({name, email, NIF});
//     Editorial.save().then(editorial => res.json(editorial))
// });

router.post('/', async (req, res) => {
    const { name, email, NIF  } = req.body;
    const Editorial = new editorials ({ name, email, NIF });
    await Editorial.save();
    res.json ({status: 'Editorial saved'});
});

 router.put('/:id', async (req, res) => {
     const { name, email, NIF} = req.body;
     const AmendEditorial = {name, email, NIF};
     //console.log(req.params.id);
     await editorials.findByIdAndUpdate (req.params.id, AmendEditorial);
     res.json ({status: 'Editorial updated'});
});

// router.put('/:id', async (req, res) => {
//     const { name, surname, email, address, phone, birthDate, proWriter } = req.body;
//     const newAuthor = {name, surname, email, address, phone, birthDate, proWriter};
//     //console.log(req.params.id);
//     await authors.findByIdAndUpdate (req.params.id, newAuthor);
//     res.json ({status: 'Author updated'});
// });

router.delete ('/:id', async (req, res) => {
    await editorials.findByIdAndRemove (req.params.id);
    res.json ({status: 'Editorial deleted'});
});

module.exports = router;
