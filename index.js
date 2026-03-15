import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import studentRouter from "./routes/studentsRouter.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return next();
  }

  token = token.replace("Bearer ", "");

  jwt.verify(token, "jwt-secret", (err, decoded) => {
    if (err || decoded == null) {
      return res.status(401).json({
        message: "Invalid token, please login again",
      });
    }

    req.user = decoded;
    next();
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

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
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000, () => {
  console.log("Server is started");
});
