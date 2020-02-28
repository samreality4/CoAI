require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(session({
  secret:"secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://@cluster0-mtrkl.mongodb.net/coAIDB", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection err:"));
db.once("open", () => {
  console.log("we are connected!");
});

const codeSchema = new mongoose.Schema({
  question: String,
  projectUrl: String,
  keyword: String,
  code: String
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Hash and Salt
userSchema.plugin(passportLocalMongoose);


const Code = mongoose.model("Code", codeSchema);
const User = mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) =>{
  Code.find({}, function(err, codes) {
    res.send(codes)
  });
});

app.post("/addform", (req, res) => {
const code = new Code({
    question: req.body.question,
    projectUrl: req.body.projectUrl,
    keyword: req.body.keyword,
    code: req.body.code
});
code.save();
});

app.get("/search/item", (req, res)=> {
  Code.find({$text: {$search:req.body.text}}, (err, result)=>{
    res.send(result);

})

app.get("/search", (req, res)=> {
  if(req.isAuthenticated()){
    // res.render("search");
  }else {
    res.redirect("/login")

  }
    });
});

app.post("/register", (req, res)=> {
  User.register({username: req.body.username}, req.body.password, function(err, user) {
if(err) {
  res.redirect("/register");
} else {
passport.authenticate("local")(req, res, ()=>{
  res.redirect("/search");
})

}

  })

})

app.post("/login", (req, res)=> {

  const user = new User({
    username: req.body.username,
    password: req.body.passport

  });

  req.login(user, (err)=>{
    if (err){
      console.log(err);
    }else{
      passport.authenticate("local")(req, res, ()=>{
        res.redirect("/search");

      })
    }
  })

})

app.get("/logout", (req, res)=> {
  req.logout();
  res.redirect("/login")
});




//TODO Need to connect react to the backend
//TODO Setup routes

app.listen(3001, () => {
  console.log("Server started on port 3001");
});