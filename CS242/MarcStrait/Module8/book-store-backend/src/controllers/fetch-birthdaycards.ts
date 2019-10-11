import { Request, Response } from 'express';

import { fetchBirthdaycards } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    try {
        const birthdaycards = await fetchBirthdaycards();
        res.json(birthdaycards);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;