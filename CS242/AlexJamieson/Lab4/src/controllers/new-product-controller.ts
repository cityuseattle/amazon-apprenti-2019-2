import { Request, Response } from 'express';

import { createProduct } from '../models/product';

const handler = (req: Request, res: Response) => {
    const { title, price, weight, amount, providers } = req.body;
    /* The above line actually can be written as follows:
    const title = req.body.title;
    const price = req.body.price;
    const weight = req.body.weight;
    const amount = req.body.amount;
    const providers = req.body.providers;
    */

    try {
        createProduct(title, price, weight, amount, JSON.parse(providers));
        res.end(`The prodcut ${title} has been created.`);
    } catch (err) {
        console.error(err);
        res.end('Something went wrong. Please check your input data.');
    }
}

export default handler