import express from 'express'

import addressController  from './controller/address-controller';
import logger           from './middlewares/timestamp';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// The router
app.get('/', (req, res) => res.end('This is your Express srver.'));
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));
