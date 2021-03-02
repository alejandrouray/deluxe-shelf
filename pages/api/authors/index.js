import db from "models/";

const Author = db.author;

export default async (_, res) => {
  try {
    const authors = await Author.find({});
    res.status(200).json(authors);
  } catch (error) {
    res.status(400).json(error);
  }
};
