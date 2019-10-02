import express from 'express';

import addressController from './controllers/address-controller';
import timestamp from './middleware/timestamp';

const app = express();

app.use(timestamp);

//
app.get('/', (req, res) =>res.end('This is your Express server.'));
app.get('/address',addressController);
app.listen(4000, () => console.log('The server is running on http://localhost:4000'));