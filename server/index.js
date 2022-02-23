const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.html"));
});

app.get("/main/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.js"));
});

app.get("/main/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.css"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
