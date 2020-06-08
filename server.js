const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "build")));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port" + port);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
