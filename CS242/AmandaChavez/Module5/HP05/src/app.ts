import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import PassportFacebook from 'passport-facebook';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

app.use(passport.initialize());
const FacebookStrategy = PassportFacebook.Strategy;

passport.use(new FacebookStrategy({
    clientID: <string>process.env.FACEBOOK_APP_ID,
    clientSecret: <string>process.env.FACEBOOK_APP_SECRET,
    callbackURL: <string>process.env.FACEBOOK_CALLBACK_URL
},
(accessToken, refreshToken, profile, done) => done(null, profile)));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

//Facebook login router
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {}), (req, res) => {
    const {displayName, id } = JSON.parse(req.query.user);
    res.render('facebook-login-success', {
      displayName, id,    
    });
});

//applicationCache.get('userForm', (req, res) => res.render('user-form'));
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));