import express from "express";

const app = express();

app.get("/", () => {
  console.log("Get request received");
});

app.post("/", () => {
  console.log("Post request received");
});

app.listen(5000, () => {
  console.log("Server is started");
});
