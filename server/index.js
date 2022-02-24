const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.html"));
});

app.get("/main/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.js"));
});

app.get("/main/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/index.css"));
});

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: "9dce5bb2692c4f70820bd5679812911e",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
