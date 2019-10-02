import { Request, Response } from 'express';
const logging = (req: Request, res: Response, next: Function) => {
    console.log(new Date());
    next();

};
export default logging;