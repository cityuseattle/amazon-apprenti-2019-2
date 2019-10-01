import express from 'express';

import orderController from './controllers/order-controller';
import logger from './middlewares/logging';

const app = express();

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/', (req, res) => res.render('address', {
    name: 'Please enter your name',
    phoneNumber: 'Enter your phone number.',
    address: 'Enter your address.'
}));
app.get('/address', orderController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));
