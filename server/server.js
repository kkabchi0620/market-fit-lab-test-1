import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 8080;
const db = new sqlite3.Database("database.db");

app.use(express.json());
app.use(cors());

// Error 처리용 middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// 데이터베이스 init
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    userPassword TEXT NOT NULL)`
);

app.post("/register", (req, res) => {
  const { userId, userPassword } = req.body;
  if (!userId || !userPassword) {
    return res.status(400).json({ error: "User ID and password are required" });
  }

  db.run(
    "INSERT INTO users (userId, userPassword) VALUES (?, ?)",
    [userId, userPassword],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json({ id: this.lastID });
    }
  );
});

app.post("/login", (req, res) => {
  const { userId, userPassword } = req.body;
  db.get(
    "SELECT * FROM users WHERE userId = ? AND userPassword = ?",
    [userId, userPassword],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (row) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  );
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
