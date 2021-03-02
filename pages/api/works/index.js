import db from "models/";

const Work = db.work;

export default async (_, res) => {
  try {
    const works = await Work.find({}).populate("authors").populate("genres");
    res.status(200).json(works);
  } catch (error) {
    res.status(400).json(error);
  }
};
