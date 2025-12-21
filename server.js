console.log("Server file started");

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "merch_shop"
});

db.connect(err => {
  if (err) {
    console.log("Database connection failed");
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
