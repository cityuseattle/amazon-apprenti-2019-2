import express from 'express';

import addressController from './controllers/address-controller';
import timeStamp          from './middlewares/timeStamp';

const app = express()


app.use(express.static('../public'));
app.use(timeStamp);
app.set('views', './views');
app.set('view engine', 'ejs');

//the router
app.get('/', (req, res) => res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}));
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));