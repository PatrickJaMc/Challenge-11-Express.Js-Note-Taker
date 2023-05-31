const express = require('express');
const path = require('path');
const notes = require('./db.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('./db.json', (req, res) => res.json(notes));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
