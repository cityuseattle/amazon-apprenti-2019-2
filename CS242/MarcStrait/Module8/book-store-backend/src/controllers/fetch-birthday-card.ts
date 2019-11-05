import { Request, Response } from 'express';

import { fetchBirthdayCard } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    try {
        const card = await fetchBirthdayCard(req.params.id);
        res.json(card);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;