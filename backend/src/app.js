const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const mongoose = require("mongoose");

const app = express();

const index = require("./routes/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use("/", index);

module.exports = app;
