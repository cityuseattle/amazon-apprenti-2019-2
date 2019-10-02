import {Request, Response } from "express";

const handler = (req: Request, res: Response) => {
    res.render('index', {
        name: 'My name is GUNUN',
        address: '2121 seattle hill road',
        phoneNumber:"24444--44-4--444"
    
   })
};

export default handler;