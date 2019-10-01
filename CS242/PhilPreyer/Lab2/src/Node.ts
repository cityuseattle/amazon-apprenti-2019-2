import express from 'express';

import addressController from './controllers/address-controller';
import logger from './middlewares/timestamp';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('address', {
    name: 'Phillip Preyer',
    phoneNumber: '253-678-7738', 
    address: '2217 3rd Ave #703, Seattle Wa 98121'
}));
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));