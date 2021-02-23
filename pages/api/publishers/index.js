import db from "models/";

const Publisher = db.publisher;

export default async (_, res) => {
  try {
    const publishers = await Publisher.find({});
    res.status(200).json(publishers);
  } catch (error) {
    res.status(400).json(error);
  }
};
