const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://node-shivani:iJX1XgSGr6nprkn4@cluster0.fc5jdgf.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db("shop");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
