import db from "models/";

const Publisher = db.publisher;

export default async (req, res) => {
  try {
    const { id: publisherID } = req.query;
    const publisher = await Publisher.findById(publisherID);
    console.log(publisher);

    res.status(200).json(publisher);
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
