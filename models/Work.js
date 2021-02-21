const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Work"];

const Work = mongoose.model(
  "Work",
  new Schema({
    title: String,
    year: String,
    authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
    genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    read: Boolean,
  })
);

module.exports = Work;
