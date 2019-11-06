import { Request, Response } from 'express';

import { createProduct } from '../models/product';

const handler = (req: Request, res: Response) => {
    const { title, price, weight, quantity, vendor } = req.body;
    /* The above line actually can be written as follows:
    const title = req.body.title;
    const price = req.body.price;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    const vendor = req.body.vendor;
    */

    try {
        createProduct(title, price, weight, quantity, JSON.parse(vendor));
        res.end(`The product ${title} has been created.`);
    } catch (err) {
        console.error(err);
        res.end(`Something went wrong. Please check your input data.`);
    }
}

export default handler;