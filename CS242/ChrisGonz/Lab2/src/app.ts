import express from 'express';

import address from './controllers/address-controller'
import orderController from './controllers/order-controller';
import logger from './middlewares/logging';


const app = express();

//app.use(time);
app.use(logger);
app.use(express.static('../public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');



app.get('/', (req, res)=> res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}));

app.get('/address', (req, res)=> res.render('address', {
    name: 'Christian',
    phoneNumber: '555-555-555',
    address: 'Seattle' 
}));
app.get('/order', orderController);

app.listen(4000, () => console.log('The server is running on https://localhost:4000'));
