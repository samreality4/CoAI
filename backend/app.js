const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/codeDB", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection err:"));
db.once("open", () => {
  console.log("we are connected!");
});

const codeSchema = new mongoose.Schema({
  question: String,
  link: String,
  keyword: String,
  code: String
});

const Code = mongoose.model("Code", codeSchema);

app.get("/", (req, res) =>{
  Code.find({}, function(err, posts) {
    
  });
});

app.get("/about", (req, res) => {
  res.render("about", { entry: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { entry: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:id", (req, res) => {
  Post.findById({ _id: req.params.id }, function(err, post) {
    res.render("post", { post: post });
  });
});

app.post("/compose", (req, res) => {
  const newPost = new Post({
    title: req.body.publishTitle,
    text: req.body.publishText
  });

  newPost.save((err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});