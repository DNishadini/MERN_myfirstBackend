import express from "express";

import {
  getStudents,
  createStudents,
} from "../controllers/studentController.js";
const studentRouter = express.Router();

studentRouter.get("/", getStudents);

studentRouter.post("/", createStudents);

studentRouter.delete("/", (req, res) => {
  res.send("Delete request received");
});

studentRouter.put("/", (req, res) => {
  res.send("Put request received");
});

export default studentRouter;
