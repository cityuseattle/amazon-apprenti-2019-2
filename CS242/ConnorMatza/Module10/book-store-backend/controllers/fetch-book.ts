import { Request, Response } from 'express';
import { fetchBook } from '../models/book';

const handler = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    const book = await fetchBook(id);
    res.json(book);
  } catch(err) {
    console.error(err);
    res.status(500).end();
  }
  res.status(200).end();
}

export default handler;
