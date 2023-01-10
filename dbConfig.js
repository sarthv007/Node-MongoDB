const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "youtube";
const client = new MongoClient(url);

const connect = async () => {
  const conn = await client.connect();
  const result = conn.db(dbName);
  return result;
};
module.exports = connect;
