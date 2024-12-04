// const express=require('express')
// const cors=require('cors')

import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(
  "mongodb+srv://rifat:n5xcrBeJzpifYilY@cluster0.umkvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const run = async () => {
  await client.connect();
  const db = client.db("express");
  const userCollection = db.collection("users");
  //    const result= await userCollection.insertOne({
  //         name:'rifat pagla na',
  //         age:32,
  //     })

  // find

  // const cursor=userCollection.find().limit(1)
  // const cursor=userCollection.find().sort({age:-1})
  // const result=await cursor.toArray()

  // update

  const result = await userCollection.updateMany(
    {
      age: {
        $gt: 10,
      },
    },
    {
      $set: {
        name: "new name na re pagla",
      },
    }
  );

  console.log("database console run fun is conndedted");
  console.log(result);
};

run();

app.get("/", (req, res) => {
  res.send("server is runnig");
});

app.listen(5000, () => {
  console.log("application is running");
});
