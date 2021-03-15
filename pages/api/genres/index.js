import db from "models/";

const Genre = db.genre;

export default async (_, res) => {
  try {
    const genres = await Genre.find({});
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json(error);
  }
};
