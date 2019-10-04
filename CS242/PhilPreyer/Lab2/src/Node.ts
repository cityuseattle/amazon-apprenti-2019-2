import express from 'express';

import addressController from './controllers/address-controller';
import logger from './middlewares/timestamp';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.end('This is your Express server.') );
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));