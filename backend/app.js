require('dotenv').config;
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");

const app = express();

//axios posts json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));

app.use(
  session({
    secret: "secret doors",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.set("useCreateIndex", true);
const conn1 = mongoose.createConnection(process.env.MONGO_KEY1, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

conn1.on("error", console.error.bind(console, "connection err:"));
conn1.once("open", () => {
  console.log("we are connected on userdb!");
});

const conn2 = mongoose.createConnection(process.env.MONGO_KEY2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

conn2.on("error", console.error.bind(console, "connection err:"));
conn2.once("open", () => {
  console.log("we are connected on codedb!");
});

//User Collection Related//

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  date: String,
});

userSchema.plugin(passportLocalMongoose);

const User = conn1.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log(err);
    done(err, user);
  });
});

//Code Collection Related//

const codeSchema = new mongoose.Schema({
  question: String,
  projectUrl: String,
  keyword: String,
  codeLanguage: String,
  code: String,
  date: String,
});

codeSchema.index({
  question: "text",
  projectUrl: "text",
  keyword: "text",
  codeLanguage: "text",
  code: "text",
});

const Code = conn2.model("Code", codeSchema);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

require("./routes/searchRoutes")(app, Code);
require("./routes/authRoutes")(app, User);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
