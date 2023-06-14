import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const uri = "mongodb://127.0.0.1:27017"; // Replace with your MongoDB connection string
      const client = await MongoClient.connect(uri);
      const db = client.db("dotkonnekt"); // Replace with your database name
      const collection = db.collection("tests"); // Replace with your collection name

      const result = await collection.insertOne(body);
      client.close();

      res.status(200).json({ message: "Data added successfully", result });
    } catch (error) {
      res.status(500).json({ message: "Error adding data", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
