import { Request, Response } from 'express';

import { fetchCards } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    try {
        const cards = await fetchCards();
        res.json(cards);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;