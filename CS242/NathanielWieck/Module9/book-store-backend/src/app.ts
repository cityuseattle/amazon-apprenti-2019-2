// like main
// first import required dependencies
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// if use angular for front end development, then need to use cors in order to define which specific server url's to accept requests
import cors from 'cors';
// file path must match actual file path of folder structure so know where to import file from
import addBookController from './controllers/add-book';
import addCardController from './controllers/add-birthday-card';
import fetchBooks from './controllers/fetch-books';

// initiate .env file
dotenv.config();

// connect to db
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

// initiate express
const app = express();

// use express functions
// accept requests from defined server url below, 4200 is the default port for angular js so will always use if using angular
app.use(cors({ origin: 'http://localhost:4200'}));
// translate js into json req.body (which is required to send to database from controller files)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// addresses must match filepath as defined in frontend api.service.ts file, so frontend routes to backend properly
// app.post below -> controllers -> add-books.ts -> models -> books.ts -> save to database -> return obj to add-books.ts
// -> print code 200 for success and MEAN stack finishes!
// router below:
app.post('/book', addBookController)
app.post('/birthdayCard', addCardController)
app.get('/books', fetchBooks)

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));