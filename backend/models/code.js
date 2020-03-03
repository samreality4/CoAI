const mongoose = require ('mongoose');

const codeSchema = new mongoose.Schema({
    question: String,
    projecturl: String,
    keyword: String,
    language: String,
    code: String
  });
  
  

module.export = codeSchema;