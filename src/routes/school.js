const express = require("express");
const router = express.Router();
const { addSchool } = require("../controllers/school");


router.get("/", (req, res) => {
  res.send("Home route");
});

router.get("/test", (req, res) => {
  res.send("API is working");
});

router.post("/addSchool", addSchool);

module.exports = router;