const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

const url = "mongodb://localhost:27017";
const dbName = "youtube";

app.get("/", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo
      .collection("videos")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/insert", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var myobj = { name: "aboli", address: "Hinjewadi" };
    dbo.collection("videos").insertOne(myobj, function (err, res) {
      if (err) throw err;
      db.close();
    });
  });
  res.send("1 document inserted");
});
app.listen(5000);
