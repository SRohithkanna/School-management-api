const db = require("../db");
const getDistance = require("../utils/distance");

// POST /addSchool
exports.addSchool = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (typeof latitude !== "number" || latitude < -90 || latitude > 90) {
      return res.status(400).json({ message: "Invalid latitude" });
    }

    if (typeof longitude !== "number" || longitude < -180 || longitude > 180) {
      return res.status(400).json({ message: "Invalid longitude" });
    }

    const [result] = await db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      success: true,
      message: "School added successfully",
      id: result.insertId
    });

  } catch (err) {
    next(err);
  }
};

// GET /listSchools
exports.listSchools = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        message: "Latitude and longitude required"
      });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const [schools] = await db.execute("SELECT * FROM schools");

    const result = schools
      .map(s => ({
        ...s,
        distance: getDistance(userLat, userLon, s.latitude, s.longitude)
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }
};