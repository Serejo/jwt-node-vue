const express = require("express");
const mongoose = require("mongoose");

const dataBase = require("./db.config");

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
