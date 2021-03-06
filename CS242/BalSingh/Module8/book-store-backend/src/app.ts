import express    from 'express';
import dotenv     from 'dotenv';  5.4K (gzipped:2.3K)
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import cors       from 'cors'; 5.2K (gzipped: 2.1K)

import addBookController from './controllers/add-book';

dotenv.config();

// Initialize MongDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

app.use(cors({origin: 'http://localhost:4200' }));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Create nd return a new book
app.post('/book', addBookController);

app.listen(process.env.PORT, () => console.log(`The server is running on http://localhost ${process.env.PORT}`));
