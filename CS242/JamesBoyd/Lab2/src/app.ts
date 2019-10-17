import express from 'express';

import addressControl from './controllers/address-controller';
import timeStamp from './middlewares/timestamp';

const app = express(); 

app.use(timeStamp)

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// The router
app.get('/', (req, res) => res.end('This is the index.'));
app.get('/address', addressControl);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));
