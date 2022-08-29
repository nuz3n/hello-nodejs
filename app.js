const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello! 3");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});