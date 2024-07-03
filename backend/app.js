require("dotenv").config();

const { data } = require("./data");
const express = require("express");
const cors = require("cors");
const { query } = require("./db/config");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log("The app is running on port 3001"));

app.get("/diary-entries", async (req, res) => {
  const result = await query("SELECT * FROM diary_entries;");
  res.json(result.rows);
});

app.post("/diary-entries/new", async (req, res) => {
  // The ID in the database has been set up as an `int` it should be a incremental index
  // When that is done, you can remove `id` from below

  await query(
    `INSERT INTO diary_entries (id, title, description) VALUES ('${14}', '${
      req.body.title
    }', '${req.body.description}')`
  );
  res.json({ ok: "ok" });
});

app.get("/diary-entries/:id", async (req, res) => {
  const result = await query(
    `SELECT * FROM diary_entries WHERE id = ${req.params.id};`
  );
  res.json(result.rows[0]);
});

app.get("/api-key", async (req, res) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  res.json(googleMapsApiKey);
  // console.log(googleMapsApiKey);
});
