import mongoose from "mongoose";
import db from "models/";

const Book = db.book;

export default async (req, res) => {
  try {
    const books = await Book.find({
      bCollection: mongoose.Types.ObjectId(req.query.id),
    }).populate({
      path: "work",
      populate: {
        path: "authors",
        model: "Author",
      },
    });

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
