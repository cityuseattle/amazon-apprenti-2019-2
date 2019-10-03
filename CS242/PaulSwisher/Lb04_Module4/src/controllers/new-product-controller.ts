import { Request, Response } from 'express';
import { createProduct } from '../models/product';

const handler = (req: Request, res: Response) => { 
    const { title, weight, price, ammount, provider } = req.body;
    try {
        createProduct (title, weight, price, ammount, provider);
        res.end(`The product ${title} has been created.`);
    } 
    catch (err) {
        console.error(err);
    }
        res.end(`Something went wrong. please check your input data.`); 
};

export default handler;