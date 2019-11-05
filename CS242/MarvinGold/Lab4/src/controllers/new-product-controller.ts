import { Request, Response } from 'express';

import { createProduct } from '../models/product';

const handler = (req: Request, res: Response) => {
    const { title, weight, price, amount, providers } = req.body;
    /* The above line actually can be written as follows: 
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
    */

    try {
        createProduct(title, weight, price, amount, JSON.parse(providers));
        res.end(`The product ${title} has been created.`);
    } catch (err) {
        console.log(err);
        res.end(`Something went wrong. Please check your input data.`);
    }
}

export default handler;