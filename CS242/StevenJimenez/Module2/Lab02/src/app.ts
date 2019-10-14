import express from 'express';

import orderController from './controllers/address-controller';
import timestamp from './middlewares/timestamp';

const app = express();

app.use(timestamp);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/', (req, res) => res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}));

app.get('/order', orderController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));