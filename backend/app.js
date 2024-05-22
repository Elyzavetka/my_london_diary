// import { data } from "./data";
const { data } = require("./data");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => console.log("The app is running on port 3001"));

app.get("/diary-entries", (req, res) => {
  // res.send("Hello")
  res.json(data);
});
