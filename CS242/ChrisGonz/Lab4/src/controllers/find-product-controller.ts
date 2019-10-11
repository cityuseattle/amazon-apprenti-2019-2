import { Request, Response } from 'express'; 

import { findProduct, ProductModel } from '../models/product';

const handler = async (req:  Request, res: Response) => {
    let title: ProductModel | null = null;
    try{
        title = await findProduct(req.query.title);
    } catch(err) {
        console.error(err);

    }
    res.json(title);

};

export default handler;