const express = require("express");
const path = require("path");

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: "9dce5bb2692c4f70820bd5679812911e",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const app = express();

app.use(express.json(""));
app.use(express.static(path.join(__dirname, "../main")));

let classes = [];

app.post("/api/classes", (req, res) => {
  let { type } = req.body;
  type = type.trim();

  const index = classes.findIndex((className) => className === type);

  if (index === -1 && type !== "") {
    classes.push(type);

    rollbar.log("class was added successfully", {
      author: "Dallin",
      type: "manual",
      classType: type,
    });
    res.status(200).send(classes);
  } else if (type === "") {
    rollbar.warning("No class given");
    res.status(400).send("must give a favorite class");
  } else {
    rollbar.critical("Class already present");
    res.status(400).send("need a different class. class already found");
  }
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
