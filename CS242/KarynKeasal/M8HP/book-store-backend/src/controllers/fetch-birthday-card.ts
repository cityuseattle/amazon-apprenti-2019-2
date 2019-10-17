import { Request, Response } from 'express';
import { fetchBirthdayCard } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    try {
        const birthdayCard = await fetchBirthdayCard(req.params.id);
        res.json(birthdayCard);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;