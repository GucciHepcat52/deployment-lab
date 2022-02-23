const express = require("express");
const path = require("path");

const app = express();

app.get("./main/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
