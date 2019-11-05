import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('This order controller is called.');
    res.end('This is the order page');
    console.log('This order controller is finished.');
}

export default handler;
