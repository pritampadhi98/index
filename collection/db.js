// db.js
import { MongoClient } from "mongodb";

async function connectDB() {
  if (connection) return connection;

  client = new MongoClient(uri, options);
  await client.connect();
  connection = client.db("mongodb://127.0.0.1:27017/dotkonnekt");

  return connection;
}

export default connectDB;
