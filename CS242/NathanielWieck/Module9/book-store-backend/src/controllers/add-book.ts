import { Request, Response } from 'express';

// exported method to define book object with user input and save, from corresponding models folder
import { addBook } from '../models/book';

// THIS IS THE LAST FUNCTION RUN BY THIS MEAN STACK... results in success or failure writing user input to db
const handler = (req: Request, res: Response) => {
    // req.body data is translated with bodyParser in the app.ts file into JSON, required to add to the database
    const { title, isbn, author, picture, price } = req.body;
    try {
        addBook(title, isbn, author, picture, price);
    } catch (err) {
        console.error(err);
        // 500 = server error
        res.status(500).end();
    }
    // 200 = successful
    res.status(200).end();
};

// if keyword default is used, then can use this variable by different name other places (for example "AddBookController")
export default handler;