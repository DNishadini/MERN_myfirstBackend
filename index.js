import express from "express";
import mongoose from "mongoose";

import studentRouter from "./routes/studentsRouter.js";

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

app.use("/students", studentRouter);

app.listen(5000, () => {
  console.log("Server is started");
});
