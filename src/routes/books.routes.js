// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const Book = require('../models/book');

// router.get('/', (req, res) => {
//     books.find = (function (err, books){
//     console.log(books);
//     });
//     res.json({
//         status: 'API Works!'
//     });
// });

router.get('/', async (req, res) => {
     const Books = await Book.find();
     res.json(Books);
 });

router.get('/:id', async (req, res) => {
    const filterBook = await Book.findById(req.params.id);
    res.json(filterBook);
});

router.post('/', (req, res) => {
    const { title, author, ISBN, genre} = req.body;
    const newBook = new Book({title, author, ISBN, genre});
    newBook.save().then(Book => res.json(Book))
});


router.put('/:id', async (req, res) => {
     const { title, author, ISBN, genre} = req.body;
     const amendBook = {title, author, ISBN, genre};
     await Book.findByIdAndUpdate (req.params.id, amendBook);
     res.json ({status: 'Book updated'});
 });

//  router.put('/:id', async (req, res) => {
//     const { name, surname, email, opinions} = req.body;
//     const newReader = {name, surname, email, opinions};
//     //console.log(req.params.id);
//     await reader.findByIdAndUpdate (req.params.id, newReader);
//     res.json ({status: 'Reader updated'});
// });

router.delete ('/:id', async (req, res) => {
    await Book.findByIdAndRemove (req.params.id);
    res.json ({status: 'Book deleted'});
});

module.exports = router;
