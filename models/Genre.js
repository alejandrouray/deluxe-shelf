const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Genre"];

const Genre = mongoose.model(
  "Genre",
  new Schema({
    title: String,
  })
);

module.exports = Genre;
