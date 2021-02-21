import mongoose from "mongoose";
import db from "models/";

const Collection = db.collection;

export default async (req, res) => {
  try {
    const collections = await Collection.find({
      publisher: mongoose.Types.ObjectId(req.query.id),
    });

    res.status(200).json(collections);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
