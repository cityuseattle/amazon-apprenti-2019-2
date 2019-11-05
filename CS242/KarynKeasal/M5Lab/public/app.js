"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var passport_1 = __importDefault(require("passport"));
var passport_facebook_1 = __importDefault(require("passport-facebook"));
var passport_google_oauth_1 = __importDefault(require("passport-google-oauth"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var new_user_controller_1 = __importDefault(require("./controllers/new-user-controller"));
var find_user_controller_1 = __importDefault(require("./controllers/find-user-controller"));
//import { userInfo } from 'os';
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
//Facebook Auth
app.use(passport_1.default.initialize());
var FacebookStrategy = passport_facebook_1.default.Strategy;
passport_1.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, function (_accessToken, _refreshToken, profile, done) { return done(null, profile); }));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
//Google Auth
app.use(passport_1.default.initialize());
var GoogleStrategy = passport_google_oauth_1.default.OAuth2Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) { return done(null, profile); }));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/', function (_req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/order', order_controller_1.default);
app.get('/userForm', function (_req, res) { return res.render('user-form'); });
app.post('/user', new_user_controller_1.default);
app.get('/user', find_user_controller_1.default);
//Facebook login router
app.get('/auth/facebook', passport_1.default.authenticate('facebook'));
app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', {}), function (req, res) {
    res.redirect(process.env.FACEBOOK_REDIRECT_URL + "?user=" + JSON.stringify(req.user));
});
app.get('/facebookLoginSuccess', function (req, res) {
    var _a = JSON.parse(req.query.user), displayName = _a.displayName, id = _a.id;
    res.render('facebook-login-success', {
        displayName: displayName, id: id,
    });
});
//Google Login Router
app.get('/auth/google', passport_1.default.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email']
}));
app.get('/auth/google/callback', passport_1.default.authenticate('google', {}), function (req, res) {
    res.redirect(process.env.GOOGLE_REDIRECT_URL + "?user=" + JSON.stringify(req.user));
});
app.get('/googleLoginSuccess', function (req, res) {
    var user = JSON.parse(req.query.user);
    res.render('google-login-success', {
        displayName: "" + user.displayName, email: "" + user.emails[0].value
    });
});
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
