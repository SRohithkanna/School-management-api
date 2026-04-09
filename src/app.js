const express = require("express");
const app = express();

app.use(express.json());

const schoolRoutes = require("./routes/school");

app.use("/", schoolRoutes);

module.exports = app;