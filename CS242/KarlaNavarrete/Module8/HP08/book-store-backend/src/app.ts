import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/add-books';
import fetchBooks from './controllers/fetch-books';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
// Set the Access-Control_Allow-Origin to http://localhost:4200 to allow our Angular app call
app.use(cors({ origin: 'http://localhost:4200'}));

// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-unlencoded post data
app.use(bodyParser.urlencoded({ extended: true}));

// The router
app.post('/book', addBookController)
app.get('/books', fetchBooks)

app.listen(process.env.port, () => console.log (`The server is running on http://localhost:${process.env.port}`));