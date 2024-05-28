const { Pool } = require("pg");

const pool = new Pool({
  // user: "liza",
  // password: "12345",
  host: "localhost",
  database: "my_london_diary",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
