import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

import addBookController from './controllers/add-book';
import fetchBooks from './controllers/fetch-books';
import fetchBook from './controllers/fetch-book';
import updateBookController from './controllers/update-book';
import deleteBookController from './controllers/delete-book';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db= mongoose.connection;
mongoose.set('useFindAndModify', false)

const app= express();
// Set the Access-Control-Allow-Origin to http://localhost:4200 to allow our Angular app call the API
app.use(cors({ origin: 'http://localhost:4200' }));

// suppport parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// The router
app.post('/book', addBookController);
app.post('/books', fetchBooks);
app.get('/book/:id', fetchBook);
app.put('/book', updateBookController);
app.delete('/book/:id', deleteBookController);

app.listen(process.env.port, () => console.log(`The server is running  on http://localhost:${process.env.port}`));