require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

//axios posts json
app.use(bodyParser.json());
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
const conn1 = mongoose.createConnection(process.env.MONGO_KEY1, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn2 = mongoose.createConnection(process.env.MONGO_KEY2, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

conn1.on("error", console.error.bind(console, "connection err:"));
conn1.once("open", () => {
  console.log("we are connected on userdb!");
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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Code Collection Related//

const codeSchema = new mongoose.Schema({
  question: String,
  projectUrl: String,
  keyword: String,
  codeLanguage: String,
  code: String
});

codeSchema.index({ question: "text", projectUrl: "text", keyword: "text", codeLanguage: "text", code: "text" });

const Code = conn2.model("Code", codeSchema);

app.get("/", (req, res) => {
    res.send("hello everyone");
  });


app.get("/main", (req, res) => {
  
    res.send("hello everyone");
  });



app.post("/api/search", (req, res) => {
  console.log(req.body.text);
  Code.find(
    {
      $text: {
        
        $search: req.body.text
      }
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Unable to search.  Please try again later.");
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/api/add", (req, res) => {
  const code = new Code({
    question: req.body.question,
    projectUrl: req.body.projectUrl,
    keyword: req.body.keyword,
    codeLanguage: req.body.language,
    code: req.body.code
  });
  code.save(err => {
    if (err) {
      console.log(err);
      res.send("Unable to save. Please try again later.");
    } else {
      res.send("successfully added");
    }
  });
});

app.put("/api/edit", (req, res) => {
  Code.update(
    { _id: req.body.id },
    {
      question: req.body.question,
      projectUrl: req.body.projectUrl,
      keyword: req.body.keyword,
      codeLanguage: req.body.language,
      code: req.body.code
    },
    { overwrite: true },
    err => {
      if (!err) {
        res.send("successfully updated!");
      } else {
        console.log(err);
        res.send("Unble to update.  Please try again later.");
      }
    }
  );
});

app.delete("/api/delete", (req, res) => {
  Code.deleteOne({ _id: req.body.id }, err => {
    if (err) {
      console.log(err);
      res.send("Unable to delete.  Please try again later.");
    } else {
      res.send("successfully deleted");
    }
  });
});

app.get("/main", (req, res) => {
  if (req.isAuthenticated()) {

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
     res.send(err);
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
        res.redirect("/main");
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
