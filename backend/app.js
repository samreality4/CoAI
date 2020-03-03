require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection err:"));
db.once("open", () => {
  console.log("we are connected!");
});

//User Collection Related//

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Code Collection Related//

const codeSchema = new mongoose.Schema({
  question: String,
  projecturl: String,
  keyword: String,
  language: String,
  code: String
});

const Code = mongoose.model("Code", codeSchema);





app.get("/", (req, res) => {
  Code.find({}, function(err, codes) {
    res.send("hello everyone");
  });
});

app.get("/search", async (req, res) => {
  const result = await Code.aggregate([
    {
      $searchBeta: {
        search: {
          query: req.body.text,
          path: ["language", "keyword"]
        }
      }
    }
  ]);
  res.send(result);
});

app.post("/search", (req, res) => {
  const code = new Code({
    question: req.body.question,
    projectUrl: req.body.projecturl,
    keyword: req.body.keyword,
    language: req.body.language,
    code: req.body.code
  });
  code.save(err => {
    if (err) {
      res.send(err);
    } else {
      res.send("successfully added");
    }
  });
});

app.put("/search", (req, res) => {
  Code.update(
    { _id: req.body.id },
    {
      question: req.body.question,
      projectUrl: req.body.projecturl,
      keyword: req.body.keyword,
      language: req.body.language,
      code: req.body.code
    },
    { overwrite: true },
    err => {
      if (!err) {
        res.send("successfully updated!");
      } else {
        res.send(err);
      }
    }
  );
});

app.delete("/search", (req, res) => {
  Code.deleteOne({ _id: req.body.id }, err => {
    res.send("successfully deleted");
  });
});

app.get("/home", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/main");
  } else {
    res.redirect("/login");
  }
});

app.post("/register", (req, res) => {
  User.register({ username: req.body.username }, req.body.password, function(
    err,
    user
  ) {
    if (err) {
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/home");
      });
    }
  });
});

app.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, err => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/search");
      });
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//TODO Need to connect react to the backend
//TODO Setup routes

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
