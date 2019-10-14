"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var passport_1 = __importDefault(require("passport"));
var passport_facebook_1 = __importDefault(require("passport-facebook"));
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
app.use(passport_1.default.initialize());
var FacebookStrategy = passport_facebook_1.default.Strategy;
passport_1.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, function (accessToken, refreshToken, profile, done) { return done(null, profile); }));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
//Facebook login router
app.get('/auth/facebook', passport_1.default.authenticate('facebook'));
app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', {}), function (req, res) {
    var _a = JSON.parse(req.query.user), displayName = _a.displayName, id = _a.id;
    res.render('facebook-login-success', {
        displayName: displayName, id: id,
    });
});
//applicationCache.get('userForm', (req, res) => res.render('user-form'));
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
