const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require('./database');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res)=>{
    res.json({message: "welcome to the API"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})