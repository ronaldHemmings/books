// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const book = require('../models/book');

// router.get('/', async (req, res) => {
//      const Book = await book.find();
//       res.json(Book);
// });

router.get('/', (req, res) => {
     book.find({}) // ({}) qué función hace?
     .populate("Author")
     .exec((err,Book) => {
         if (err) {
             return res.status(400).send(err)
         }
         return res.send(Book)
     })
 });


router.get('/:id', async (req, res) => {
    const filterBook = await book.findById(req.params.id);
    res.json(filterBook);
});

router.post('/', async (req, res) => {
    const { title, author, ISBN, genre  } = req.body;
    const books = new book ({ title, author, ISBN, genre });
    await books.save();
    res.json ({status: 'Book saved'});
});

//  router.post('/', (req, res) => {
//       const {title, authorId, ISBN, genre} = rew.body;

//       let books = new book ({
//           title,
//           author: authorId,
//           ISBN,
//           genre
//       })
//       books.save().then(book => res.json(book))
//   })


router.put('/:id', async (req, res) => {
    const { title, author, ISBN, genre  } = req.body;
    const amendBook = {title, author, ISBN, genre };
    //console.log(req.params.id);
    await book.findByIdAndUpdate (req.params.id, amendBook);
    res.json ({status: 'Book updated'});
});

router.delete ('/:id', async (req, res) => {
    await book.findByIdAndRemove (req.params.id);
    res.json ({status: 'Book deleted'});
});

module.exports = router;
