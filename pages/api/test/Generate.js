import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method, body } = req;
  console.log(body, "result");
  if (method === "POST") {
    try {
      const { barnddata, payloadData } = JSON.parse(body);
      const uri = "mongodb://127.0.0.1:27017"; // Replace with your MongoDB connection string
      const client = await MongoClient.connect(uri);
      const db = client.db("dotkonnekt"); // Replace with your database name
      const collection = db.collection("tests"); // Replace with your collection name
      const query = {};

      // Projection to specify the fields to include (1) or exclude (0)
      const projection = { "aesthetic.overAll": 1 };

      const result = collection
        .find({ $or: barnddata }, {})
        .project(payloadData);
      const response = await result.toArray();

      client.close();

      res.status(200).json({ message: "successfully", response });
    } catch (error) {
      res.status(500).json({ message: "Error adding data", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
