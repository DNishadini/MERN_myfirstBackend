import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const connectionString =
  "mongodb+srv://admin:123@cluster0.rgafwkz.mongodb.net/?appName=Cluster0";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

app.get("/", (req, res) => {
  console.log(req.body);
  console.log("Get request received");
  res.json({
    message: "Hello world",
  });
});

app.post("/", (req, res) => {
  console.log("Post request received");
});

app.delete("/", (req, res) => {
  console.log("Delete request received");
});

app.listen(5000, () => {
  console.log("Server is started");
});
