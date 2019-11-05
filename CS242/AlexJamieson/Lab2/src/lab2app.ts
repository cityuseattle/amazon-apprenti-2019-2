import express from 'express';
import addressController from './controllers/address-controller'
import timeStamp from './middlewares/timestamp'

const app = express();

app.use(timeStamp);
app.use(express.static('../public'));
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');

//The Router
app.get('/', (req, res) => res.end('This is my lab 2 express server'));
app.get('/address', addressController);

app.listen(4000, () => console.log('The server is running at http://localhost:4000'));