import { Request, Response } from 'express';
import { findProduct, Product } from '../models/product';

const handler = async (req: Request, res: Response) => {
  let product: Product | null = null;
  try {
    product = await(findProduct(req.query.title))
  }
  catch (err) {
    console.error(err);
  }
  res.json(product);
}

export default handler;
