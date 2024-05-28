// import { data } from "./data";
const { data } = require("./data");
const express = require("express");
const cors = require("cors");
const { query } = require("./db/config");
const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => console.log("The app is running on port 3001"));

app.get("/diary-entries", async (req, res) => {
  const result = await query("SELECT * FROM diary_entries;");
  res.json(result.rows);
});

app.get("/diary-entries/:id", async (req, res) => {
  const result = await query(
    `SELECT * FROM diary_entries WHERE id = ${req.params.id};`
  );
  res.json(result.rows[0]);
});
