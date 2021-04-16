// definir las operaciones a través de las URL que vamos a dar a nuestro servidor.
const express = require('express');
const router = express.Router();

const editorial = require('../models/editorial');

// router.get('/', (req, res) => {
//     books.find = (function (err, books){
//     console.log(books);
//     });
//     res.json({
//         status: 'API Works!'
//     });
// });

router.get('/', async (req, res) => {
     const Editorial = await editorial.find();
     res.json(Editorial);
 });

router.get('/:id', async (req, res) => {
    const filterEditorial = await editorial.findById(req.params.id);
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
    const Editorial = new editorial ({ name, email, NIF });
    await Editorial.save();
    res.json ({status: 'Editorial saved'});
});

 router.put('/:id', async (req, res) => {
     const { name, email, NIF} = req.body;
     const neweditorial = {name, email, NIF};
     //console.log(req.params.id);
     await editorials.findByIdAndUpdate (req.params.id, neweditorial);
     res.json ({status: 'Editorial updated'});
});

router.delete ('/:id', async (req, res) => {
    await editorial.findByIdAndRemove (req.params.id);
    res.json ({status: 'Editorial deleted'});
});

module.exports = router;
