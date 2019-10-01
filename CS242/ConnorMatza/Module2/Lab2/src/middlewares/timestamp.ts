import { Request, Response } from 'express';

const  timestamp = (req: Request, res: Response, next: Function) => {
    console.log(req.headers);
    console.log("New incoming connection");
    console.log(new Date());
    next();
}

export default timestamp;