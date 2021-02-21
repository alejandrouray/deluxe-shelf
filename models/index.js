const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;

db.publisher = require("./Publisher");
db.collection = require("./Collection");

db.mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

module.exports = db;
