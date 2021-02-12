import nextConnect from "next-connect";
import middleware from "middleware/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const collections = await req.db
    .collection("collections")
    .find({ publisher: ObjectId(req.query.id) })
    .toArray();

  res.send(collections);
});

export default handler;
