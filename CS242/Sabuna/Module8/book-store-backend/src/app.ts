import express from 'express';
import dotenv from 'dotenv'; 5.4K (gzipped: 2.3K)
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 5.2K (gzipped: 2.1K)

import addBookController from './controllers/add-book';
dotenv.config();
//Intialize MongoDB
mongoose.connect (process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;
const app = express();
//
app.use(cors({ origin: 'http://localhost:420'}));
//
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded({extended: true}));
//
app.post('/book', addBookController)
app.listen(process.env.port, () => console.log ('The server is running on http://localhost:${process.env.port}'));