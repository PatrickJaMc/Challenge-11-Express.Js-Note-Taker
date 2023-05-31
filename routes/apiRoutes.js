const router =  require('express').Router()
const { readFromFile,  readAndAppend } = require('../db/fsUtils');
const uuid = require('../db/uuid');

// GET Route for Notes page
router.get('/notes', (req, res) => {
   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST NOTES TO THE PAGE
router.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid()
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
});

module.exports = router