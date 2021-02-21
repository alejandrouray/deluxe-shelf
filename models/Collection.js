const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Collection"];

const Collection = mongoose.model(
  "Collection",
  new Schema({
    title: String,
    language: String,
    format: String,
    ilustrated: Boolean,
    publisher: { type: Schema.Types.ObjectId, ref: "Publisher" },
  })
);

module.exports = Collection;
