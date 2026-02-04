import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";

const app = express();

app.use(express.json());

const connectionString =
  "mongodb+srv://admin:123@cluster0.ocdf7bj.mongodb.net/?appName=Cluster0";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.get("/", (req, res) => {
  console.log("Get request received");
});

app.post("/", (req, res) => {
  console.log("Post request received");
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  });
  student
    .save()
    .then(() => {
      res.json({
        message: "student creation successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "student creation fail",
      });
    });
});

app.delete("/", (req, res) => {
  console.log("Delete request received");
});

app.listen(5000, () => {
  console.log("Server is started");
});
