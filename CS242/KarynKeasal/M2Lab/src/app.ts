import express from 'express';

import addressController from './controllers/address-controller';
import logger from './middlewares/logging';
import timeStamp from './middlewares/timestamp';

const app = express();

app.use(timeStamp);
app.use(logger);
app.use(timeStamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// The router
app.get('/address', addressController, (req, res) => res.render('address', {
    name: 'Enter your name here.',
    phoneNumber: 'Enter your phone number here',
    address: 'Enter your address here'
}));
app.get('/', (req, res) => res.end('This is my home page.'));

app.listen(4000, () => console.log('This server is running on http://localhost:4000'));
