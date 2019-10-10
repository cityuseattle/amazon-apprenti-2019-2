import { Request, Response } from 'express';

import { fetchBirthdayCard } from '../models/birthday-card';

const Handler = async (req: Request, res: Response) => {
    try {
        const birthdayCard = await fetchBirthdayCard(req.params.id);
        res.json(birthdayCard);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default Handler;