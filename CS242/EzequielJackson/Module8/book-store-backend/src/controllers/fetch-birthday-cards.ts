import { Request, Response } from 'express';

import { fetchBirthdayCards } from '../models/birthday-card';

const Handler = async (req: Request, res: Response) => {
    try {
        const birthdayCards = await fetchBirthdayCards();
        res.json(birthdayCards);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default Handler;