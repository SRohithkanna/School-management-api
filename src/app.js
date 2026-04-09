const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

const schoolRoutes = require("./routes/school");

app.use("/", schoolRoutes);

app.use(errorHandler);

module.exports = app;