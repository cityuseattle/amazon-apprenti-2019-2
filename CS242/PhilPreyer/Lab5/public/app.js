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
var passport_google_oauth_1 = __importDefault(require("passport-google-oauth"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var new_user_controller_1 = __importDefault(require("./controllers/new-user-controller"));
var find_user_controller_1 = __importDefault(require("./controllers/find-user-controller"));
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
app.use(passport_1.default.initialize());
var GoogleStrategy = passport_google_oauth_1.default.OAuth2Strategy;
//var passport = require('passport');
//var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
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
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/order', order_controller_1.default);
app.get('/userForm', function (req, res) { return res.render('user-form'); });
app.post('/user', new_user_controller_1.default);
app.get('/user', find_user_controller_1.default);
// Facebook login router
app.get('/auth/google', passport_1.default.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));
app.get('/auth/google/callback', passport_1.default.authenticate('google', {}), function (req, res) {
    res.redirect(process.env.GOOGLE_REDIRECT_URL + "?user=" + JSON.stringify(req.user));
});
app.get('/googleLoginSuccess', function (req, res) {
    var _a = JSON.parse(req.query.user), displayName = _a.displayName, id = _a.id;
    res.render('google-login-success', {
        displayName: displayName, id: id
    });
});
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
