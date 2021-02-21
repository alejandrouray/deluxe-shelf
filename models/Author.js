const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Author"];

const Author = mongoose.model(
  "Author",
  new Schema({
    name: String,
    born: Date,
    died: Date,
    country: String,
    genre: String,
  })
);

module.exports = Author;
