import express from 'express';

import addressController from './controllers/address-controller';
import timestamp from './middlewares/timestamp';

const app = express();

app.use(timestamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
//The router
app.get('/address', addressController, (req, res) => res.render('address', {
    name: 'Insert your name here: ',
    phoneNumber: 'Insert your phone number here: ',
    address: 'Insert your address here: '
}));
app.get('/', (req, res) => res.end('This is your Home page.'));

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));