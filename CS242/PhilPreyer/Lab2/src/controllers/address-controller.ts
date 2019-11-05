import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {res.render('address', {
    name: 'Phillip Preyer',
    phoneNumber: '253-678-7738', 
    address: '2217 3rd Ave #703, Seattle Wa 98121'
})
}
export default handler;