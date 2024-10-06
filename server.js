import express from "express";
import axios from "axios";
import cors from "cors";
import content from "./content.js";

import env from "dotenv";

const app = express();
env.config();
app.use(express.json());
app.use(cors());
const port = process.env.server_port;

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

app.get("/api", async (req, res) => {
  try {
  
    res.send(content);
   // res.send(response.data);
    console.log();
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.get("/api/search", async (req, res) => {
  const query = req.query.query;
  //console.log("search", query);
  try {
    const response = await axios.get(
     
    );
    res.send(response.data);
    // res.send(videos)
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`server running port http://localhost:${port}`);
});
