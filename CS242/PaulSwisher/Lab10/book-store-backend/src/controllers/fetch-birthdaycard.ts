import { Request, Response } from 'express';

import { fetchBirthdaycard } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    try {
        // const id = req.params.id;
        const birthdaycard = await fetchBirthdaycard(req.params.id);
        res.json(birthdaycard);
    }   catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;
