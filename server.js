const express = require("express");
const connect = require("./dbConfig");
const app = express();
app.get("/", async (req, res) => {
  const result = await connect();
  const collection = result.collection("videos");
  const data = await collection.find({}).toArray();
  res.send(data);
  result.close();
});

app.get("/insert", async (req, res) => {
  const result = await connect();
  const db = await result.collection("videos");
  const myobj = { name: "aboli", address: "Hinjewadi" };
  const data = await db.insert(myobj);
  console.log(data);
  if (data.acknowledged) {
    res.send("1 document inserted");
  }
});

app.listen(5000);
