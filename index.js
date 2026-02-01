import express from "express";

const app = express();

function success() {
  console.log("Server is started");
}

app.listen(5000, success);
