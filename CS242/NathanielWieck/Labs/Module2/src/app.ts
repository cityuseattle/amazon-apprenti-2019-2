import express from 'express';

import addressController from './controllers/address-controller';
import indexController from './controllers/index-controller';
import timeStamp from './middlewares/timestamp';

const app = express();

app.use(timeStamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {
    title: 'This is the index.'
}));
app.get('/', indexController);

app.get('/address', (req, res) => res.render('address', {
    name: 'Professor WTF Pewpy',
    phoneNumber: '123-456-7890',
    address: '2nd Star (to the right, straight on until morning)'
}));
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));