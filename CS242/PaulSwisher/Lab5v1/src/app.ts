import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import PassportFacebook from 'passport-facebook';
import PassportGoogle from 'passport-google-oauth';

import orderController from './controllers/order-controller';
import newUserController from './controllers/new-user-controller';
import findUserController from './controllers/find-user-controller';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const app = express();

//Facebook initialize
app.use(passport.initialize());
// const FacebookStrategy = PassportFacebook.Strategy;

// passport.use(new FacebookStrategy({
//   clientID: <string>process.env.FACEBOOK_APP_ID,
//   clientSecret: <string>process.env.FACEBOOK_APP_SECRET,
//   callbackURL: <string>process.env.FACEBOOK_CALLBACK_URL
// },
// (accessToken, refreshToken, profile, done) => done(null, profile)));

//Google initilize
app.use(passport.initialize());
const GoogleStrategy = PassportGoogle.OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: <string>process.env.GOOGLE_CLIENT_ID,
  clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: <string>process.env.GOOGLE_CALLBACK_URL
},
(accessToken, refreshToken, profile, done) => done(null, profile)));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// The root router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);
app.get('/userForm', (req, res) => res.render('user-form'));
app.post('/user', newUserController)
app.get('/user', findUserController)

//Facebook login router
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {}), (req, res) => {
  res.redirect(`${process.env.FACEBOOK_REDIRECT_URL}?user=${JSON.stringify(req.user)}`);

app.get('/facebookLoginSuccess', (req: express.Request, res: express.Response) => {
 const { displayName, id } = JSON.parse(req.query.user);
 res.render('facebook-login-success', {
   displayName, id,
    });
  });
});

//Google login router
  
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback', passport.authenticate('google', {}), (req, res) => {
    res.redirect(`${process.env.GOOGLE_REDIRECT_URL}?user=${JSON.stringify(req.user)}`);
  
  app.get('/googleLoginSuccess', (req: express.Request, res: express.Response) => {
   const { displayName, id } = JSON.parse(req.query.user);
   res.render('google-login-success', {
     displayName, id,

    });
  });
});



// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),

// // app.get('/googleLoginSuccess', (req: express.Request, res: express.Response) => {
//     // const { displayName, id } = JSON.parse(req.query.user);
//     function(req, res) {
//     res.render('google-login-success')});
  
    // launch server
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
