const db = require("../db");

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