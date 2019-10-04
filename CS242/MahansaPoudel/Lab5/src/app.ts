import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import orderController from "./controllers/order-controller";
import newUserController from "./controllers/new-user-controller";
import findUserController from "./controllers/find-user-controller";
import passport from "passport";
import PassportFacebook from "passport-facebook";
import PassportGoogleOauth from "passport-google-oauth";
dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true });
const db = mongoose.connection;

const app = express();

app.use(passport.initialize());
const GoogleStrategy = PassportGoogleOauth.OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: <string>process.env.GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => done(null, profile)
  )
);

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

app.use(express.static("../public"));
app.set("views", "./views");
app.set("view engine", "ejs");
// The router
app.get("/", (req, res) =>
  res.render("index", {
    title: "The index page title",
    content: "This is the content for the index page."
  })
);
app.get("/order", orderController);

app.get("/userForm", (req, res) => res.render("user-form"));

app.post("/user", newUserController);
app.get("/user", findUserController);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  }
);
app.get(
  "/googleLoginSuccess",
  (req: express.Request, res: express.Response) => {
    const { displayName, id } = JSON.parse(req.query.user);
    res.render("google-login-success", {
      displayName,
      id
    });
  }
);
app.listen(4000, () =>
  console.log("The server is running on http://localhost:4000")
);
