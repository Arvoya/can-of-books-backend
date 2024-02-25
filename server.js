require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book');
const {readBooks, createBooks, deleteBooks, updateBooks} = require("./handlers");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_CONN);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (request, response) => response.status(200).send('Default Route Working'));

app.get('/books', readBooks);
app.post('/books', createBooks);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id', updateBooks);
app.get('*', (request, response) => response.status(400).send('Resource Not Found'));


app.listen(PORT, () => console.log(`listening on ${PORT}`));
