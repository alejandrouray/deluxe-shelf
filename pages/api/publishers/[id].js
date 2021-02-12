import nextConnect from "next-connect";
import middleware from "middleware/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const publisher = await req.db
    .collection("publishers")
    .find({ _id: ObjectId(req.query.id) })
    .toArray();

  res.send(publisher[0]);
});

export default handler;
