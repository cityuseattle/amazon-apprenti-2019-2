import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';

/* 
  Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted
  resources on a web page to be requested from another domain 
  outside the domain from which the first resource was served.
*/
import cors       from 'cors';

import addBookController from './controllers/addBookController';

dotenv.config();

// Initialize MongDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

/*
  A web page may freely embed cross-origin images, stylesheets, scripts, 
  iframes, and videos. 
  Certain "cross-domain" requests, notably Ajax requests, are forbidden 
  by default by the same-origin security policy.
  Allow Access-Control-Allow-Origin (ACAO) to the given URL.
*/
app.use(cors({origin: 'http://localhost:4200' }));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Create nd return a new book
app.post('/book', addBookController);

app.listen(process.env.PORT, () => console.log(`The server is running on http://localhost ${process.env.PORT}`));
