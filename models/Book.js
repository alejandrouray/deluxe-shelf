const mongoose = require("mongoose");
const Schema = mongoose.Schema;

delete mongoose.connection.models["Book"];

const Book = mongoose.model(
  "Book",
  new Schema({
    ISBN13: String,
    title: String,
    pages: Number,
    weight: Number,
    height: Number,
    depth: Number,
    description: String,
    bCollection: { type: Schema.Types.ObjectId, ref: "CollectionDB" },
    work: { type: Schema.Types.ObjectId, ref: "Work" },
  })
);

module.exports = Book;
