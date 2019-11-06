import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';

// Load system environment variables
dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true });
const db = mongoose.connection;

const app = express();

app.use(passport.initialize());
const GoogleStrategy = passportGoogle.OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: <string>process.env.GOOGLE_CLIENT_ID,
    clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: <string>process.env.GOOGLE_CALLBACK_URL
},
    (accessToken, refreshToken, profile, done) => done(null, profile)
));

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

app.get('/', (req, res) => res.render('index'));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] }));

app.get('/auth/google/callback', passport.authenticate('google', {}), (req, res) => {
    res.redirect(`${process.env.GOOGLE_REDIRECT_URL}?user=${JSON.stringify(req.user)}`);
});

app.get('/googleLoginSuccess', (req: express.Request, res: express.Response) => {
    const user = JSON.parse(req.query.user);
    res.render('google-login-success', {
        displayName: `${user.displayName}`, email: `${user.emails[0].value}`
    });
});

// Setup Listen Server
app.listen(4000, () => console.log('The server is running on http://localhost:3000'));