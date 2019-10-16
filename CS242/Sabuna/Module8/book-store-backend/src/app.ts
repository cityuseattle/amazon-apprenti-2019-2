import express from 'express';
import dotenv from 'dotenv'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

import addBookController from './controllers/add-book';
dotenv.config();
//Intialize MongoDB
mongoose.connect (process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
//
app.use(cors({ origin: 'http://localhost:4200'}));
//
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded({extended: true}));
//the router
app.post('/book', addBookController)
app.listen(process.env.port, () => console.log (`The server is running on http://localhost:${process.env.port}`));