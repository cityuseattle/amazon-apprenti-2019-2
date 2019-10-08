import express from 'express';
import addressController from '/Users/skejakob/amazon-apprenti-2019-2/CS242/JakeSkelton/Module2/controllers/address-controller';
import timeStamp from '/Users/skejakob/amazon-apprenti-2019-2/CS242/JakeSkelton/Module2/middlewares/timestamp';



const app = express();

app.use(timeStamp)
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/address', (req, res) => res.render('address', {
    title: 'The address page title',
    content: 'This is the content for the address page.'
}));
app.get('/', (req, res) => res.end("This is your Express server."));
app.get('/address', addressController)

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));