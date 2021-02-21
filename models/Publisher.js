const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Publisher"];

const Publisher = mongoose.model(
  "Publisher",
  new Schema({
    title: String,
    country: String,
    website: String,
  })
);

module.exports = Publisher;
