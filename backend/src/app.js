const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConection.config");
const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.set("mongooseConnection", mongooseConnection);
app.use(morgan("dev"));

app.use("/", index);
app.use("/api/v1", userRoutes);
module.exports = app;
