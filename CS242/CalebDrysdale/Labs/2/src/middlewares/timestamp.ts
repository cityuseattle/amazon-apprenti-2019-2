import {Request, Response} from 'express';

const timeStamp = (req: Request, res: Response, next: Function) => {
    console.log(new Date());
    next();
};


export default timeStamp;