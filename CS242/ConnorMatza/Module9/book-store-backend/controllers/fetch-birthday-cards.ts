import { Request, Response } from 'express'
import { fetchBirthdayCards} from '../models/birthday-card';

const handler = async(req: Request, res: Response) => {
    try {
        const books = await fetchBirthdayCards();
        res.json(books);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
}

export default handler;
