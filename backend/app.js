require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//parse data from http post request
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");

const app = express();

//support parsing of json.
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));
//merge and normalize(conforms to the operating system) the given path arguments.

app.use(
  session({
    secret: "secret doors",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
//to alter the req object and change the user value in the current session to a deserialized user object.

mongoose.set("useCreateIndex", true);
const conn1 = mongoose.createConnection(process.env.MONGO_KEY1, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//old methods were deprecated and replaced by these new methods

conn1.on("error", console.error.bind(console, "connection err:"));
conn1.once("open", () => {
  console.log("we are connected on userdb!");
});

const conn2 = mongoose.createConnection(process.env.MONGO_KEY2, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

conn2.on("error", console.error.bind(console, "connection err:"));
conn2.once("open", () => {
  console.log("we are connected on codedb!");
});

//User Collection Related//

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const User = conn1.model("User", userSchema);

passport.use(User.createStrategy());
//use username and password to authenticate users

passport.serializeUser((user, done) => {
  done(null, user.id);
});
//save user object in session during login
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log(err);
    done(err, user);
  });
});
//find user by id and then attaches the user object to req

//Code Collection Related//

const codeSchema = new mongoose.Schema({
  question: String,
  projectUrl: String,
  keyword: String,
  codeLanguage: String,
  code: String
});

codeSchema.index({
  question: "text",
  projectUrl: "text",
  keyword: "text",
  codeLanguage: "text",
  code: "text"
});

const Code = conn2.model("Code", codeSchema);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

require("./routes/searchRoutes")(app, Code);
require("./routes/authRoutes")(app, User);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
