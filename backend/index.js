import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, (req, res) => {
  console.log("server is runnig");
});
