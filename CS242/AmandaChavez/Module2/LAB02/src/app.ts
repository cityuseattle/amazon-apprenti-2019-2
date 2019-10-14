import express from 'express';

import addressController from './controllers/address-controller';
import timestamp         from './middlewares/timestamp';

const app = express();  

app.use(timestamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/address', (req, res) => res.render('address', {
    name: addressController[0],
    phoneNumber: addressController[1],
    address: addressController[2],
}));

app.get('/', (req, res) => res.end('This is the Express server for CS242 Lab 02. Please go to the following link http://localhost:4000/address'));

app.listen(4000, () => console.log('The server is running on http://localhost:4000/address'));

