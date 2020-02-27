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

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const Code = mongoose.model("Code", codeSchema);

app.get("/", (req, res) =>{
  Code.find({}, function(err, codes) {
    res.send(codes)
  });
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});