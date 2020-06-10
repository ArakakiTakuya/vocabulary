const express = require("express");
const app = express();
const path = require("path");

const db = require("./knex.js");

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/api/words", async (req, res) => {
  try {
    const words = await db("words").select();
    res.status(200).json({ words: words });
  } catch (err) {
    console.error("Error", err);
    res.status(500).end();
  }
});

app.get("/api/words/:level", async (req, res) => {
  const level = req.params.level;
  try {
    if (level === "basic") {
      const words = await db("words").where("level", "=", "basic").select();
      res.status(200).json({ words: words });
    } else if (level === "advance") {
      const words = await db("words").where("level", "=", "advance").select();
      res.status(200).json({ words: words });
    }
  } catch (err) {
    console.error("Error", err);
    res.status(500).end();
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port" + port);
});
