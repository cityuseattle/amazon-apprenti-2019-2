import { Request, Response } from 'express';
import { fetchBirthdayCard } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    const birthdaycard = fetchBirthdayCard(id);
    res.json(birthdaycard);
  } catch(err) {
    console.error(err);
    res.status(500).end();
  }
  res.status(200).end();
}

export default handler;
