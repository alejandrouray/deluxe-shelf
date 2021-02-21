const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;

db.author = require("./Author");
db.book = require("./Book");
db.collection = require("./Collection");
db.genre = require("./Genre");
db.publisher = require("./Publisher");
db.work = require("./Work");

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
