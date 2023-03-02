const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const dataBase = require("./config/db.config");

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

mongoose
  .connect(dataBase.local.localDatabaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log(`Could not connect to the database. Exiting now... ${err}`);
    process.exit();
  });

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use("/", index);
app.use("/api/v1", userRoutes);
module.exports = app;
