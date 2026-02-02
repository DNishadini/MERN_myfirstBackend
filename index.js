import express from "express";

const app = express();
app.use(express.json());

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
