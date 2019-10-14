import {Request, Response} from 'express';

const timeStamp = (req: Request, res: Response, next: Function) => {
    console.log(new Date());
    next();     //invokes the next middleware function in the app
};


export default timeStamp;