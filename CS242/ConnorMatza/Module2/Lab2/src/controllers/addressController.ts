import { Request, Response } from 'express';

const addressController = (req: Request, res: Response) => {
    res.render('address', { name: "Connor Matza", phoneNumber: "4444444444", address: "Nope"});
}

export default addressController;