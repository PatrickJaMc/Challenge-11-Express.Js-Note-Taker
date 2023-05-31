const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('.db/db.json', (req, res) => res.json(notes));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});