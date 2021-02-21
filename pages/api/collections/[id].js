import db from "models/";

const Collection = db.collection;

export default async (req, res) => {
  try {
    const { id: collectionID } = req.query;
    const collection = await Collection.findById(collectionID);

    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
