import express from 'express';
import timestamp from './middlewares/timestamp';
import addressController from './controllers/addressController';

const app = express();
const port = 4000;
app.get('/', (req, res) => {
    res.send("PONG");
})
app.use(timestamp);
app.use(express.static('../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/address', addressController);
app.listen(port, "localhost", () => {
    console.log(`Server listening on http://localhost:${port}`)
});