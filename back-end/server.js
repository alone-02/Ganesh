const express = require("express");
const cors = require("cors");
const content = require("./content.js");
const env = require("dotenv");

const app = express();
const port = 2000;

env.config();
require('dotenv/config');
app.use(express.json());
app.use(cors());


app.get("/api", async (req, res) => {
  try {
    res.send(content);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.post("/api/product", async (req, res) => {
  const newProduct = req.body;
  try {
    console.log("new",newProduct);
    res.send(newProduct);
  } catch (err) {
    res.status(500).send("Server error");
  }
});


app.listen(port, () => {
  console.log(`server running port http://localhost:${port}`);
});
