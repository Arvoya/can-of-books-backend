require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_CONN);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (request, response) => response.status(200).send('Default Route working'));

app.get('/books', async (request, response) => {

app.get('*', (request, response) => response.status(400).send('Resource Not Found'));

  const books = await Book.find({});

  response.json(books)

})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
