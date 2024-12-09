const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Yogurt = require("./models/yogurts.js");
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

app.post("/yogurts", async (req, res) => {
  const createdYogurt = await Yogurt.create(req.body);
  res.json(createdYogurt);
});

app.get("/yogurts", async (req, res) => {
  const foundYogurts = await Yogurt.find();
  res.json(foundYogurts);
});

app.delete("/yogurts/:yogurtsId", async (req, res) => {
  const deleteYogurt = await Yogurt.findByIdAndDelete(req.params.yogurtsId);
  res.json(deleteYogurt);
});

app.put("/yogurts/:yogurtId", async (req, res) => {
  const updateYogurt = await Yogurt.findByIdAndUpdate(
    req.params.yogurtId,
    req.body,
    {new:true}
  );
  res.json(updateYogurt);
});

// app.get('/'. async (req, res) => {
//     const apiResponse = await fetch (`http://localhost:3000/`)
//     const data = await apiResponse.json(
//         res.json(data)
//     )
// })

app.listen(3000, () => {
  console.log("The express app is ready!");
});
