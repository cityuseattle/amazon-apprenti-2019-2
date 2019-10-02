import { Request, Response } from 'express';

  const handler = (req: Request, res: Response) => {
     console.log('The address controller is called.');
     res.render('address', {
         name: 'Enter your name here if you trust the internet.',
         phoneNumber: 'Enter your phone number here, if you want your numebr sold',
         address: 'Enter your address here, if you would like junk mail'
     });
     console.log('The address controller is finished.');
 };

  export default handler; 