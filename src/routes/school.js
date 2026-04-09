const express = require("express");
const router = express.Router();
const { addSchool } = require("../controllers/school");
const { listSchools } = require("../controllers/school");

//Home route
router.get("/", (req, res) => {
  res.send("Home route");
});

// test route
router.get("/test", (req, res) => {
  res.send("API is working");
});

//add school route
router.post("/addSchool",addSchool);

//list school route
router.get("/listSchools",listSchools);

module.exports = router;