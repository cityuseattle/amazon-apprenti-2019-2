import express from 'express';

import addressController from './controllers/address-controller';
import timeStamp from './middlewares/timestamp';

const app = express();

app.use(timeStamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

//Router
app.get('/', (req, res) => res.end('This is your express server'));
app.get('/address', addressController);


app.listen(4000, () => console.log('This app is running on https://localhost:4000'));