import nextConnect from "next-connect";
import middleware from "middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const publishers = await req.db.collection("publishers").find().toArray();
  res.send(publishers);
});

export default handler;
