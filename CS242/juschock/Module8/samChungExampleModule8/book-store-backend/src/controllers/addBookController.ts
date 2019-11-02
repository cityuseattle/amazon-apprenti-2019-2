import { Request, Response } from 'express';
import { addBook }           from '../models/book';

const handler = (req: Request, res: Response) => {
    const { title, isbn, author, picture, price } = req.body;
    try {
        addBook(title, isbn, author, picture, price);
    }
    catch (err) {
        console.error(err);
        /*
          The 500 Internal Server Error is a very general HTTP status code that   
          means something has gone wrong on the website's server, 
          but the server could not be more specific on 
          what the exact problem is.
        */
        res.status(500).end();
    }
    /*
      200 implies that the response contains a payload that 
      represents the status of the requested resource. 
    */
    res.status(200).end();
};

// There is only a single default export per module.
// A default export can be a function, a class, an object or anything else.
export default handler;