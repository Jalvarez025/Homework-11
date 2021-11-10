const express = require('express');
const path = require('path');
const notesData = require('./db/notes.json');
const apiRoutes = require('./routes/apiRoutes')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log('listening on port 3001'))