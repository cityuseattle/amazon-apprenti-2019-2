import { Request, Response } from 'express';


const timestamp = (req: Request, res: Response, next: Function) => {
    let date = new Date();
    let timestamp = date.valueOf();
    console.log("Timestamp is:" + date);
    next();
};

export default timestamp;



