import { Request, Response } from 'express';
const handler = (req: Request, res: Response, next: Function) => {
    console.log(new Date());
    next();

};
export default handler;