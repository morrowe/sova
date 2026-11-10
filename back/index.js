const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const {Pool} = require('pg')

const app = express()
app.use(cors())
app.use(express.json()) 

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"1234",
    port:"5432"
})

const PORT = "3000" || 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get("/api/otzv", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, work, start, rating FROM otzv");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/chess", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, info FROM chess");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/preim", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, text FROM preim");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/prepods", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, foto, name, info FROM prepods");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/programs", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, text, time FROM programs");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, data, headline, info FROM  news");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});