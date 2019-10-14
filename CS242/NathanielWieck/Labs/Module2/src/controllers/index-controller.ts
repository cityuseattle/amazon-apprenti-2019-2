import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('The index controller is being called.');
    res.end('This is the index page');
    console.log('The index controller is done.');
};

export default handler;