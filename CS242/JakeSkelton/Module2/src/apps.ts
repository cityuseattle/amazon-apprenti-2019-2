import express         from 'express';
import orderController from './controllers/order-controller';
import logger          from './middlewares/logging';

const app = express();
app.use(logger)
//The router

app.get('/', (req, res) => res.end('This is your Express Server.'));
app.get('/order', orderController);

app.listen(3000, () => console.log('This server is running on http://localhost:3000'));