import { Request, Response } from "express";

import { findProduct, ProductModel } from "../models/product";

const handler = async (req: Request, res: Response) => {
  let user: ProductModel | null = null;
  try {
    user = await findProduct(req.query.username);
  } catch (err) {
    console.error(err);
  }
  res.json(user);
};

export default handler;
