const express = require("express");
const router = express.Router();
const Rescue = require("../models/Rescue");

// Submit rescue report
router.post("/", async (req, res) => {
  try {
    const report = new Rescue(req.body);
    const savedReport = await report.save();
    res.json(savedReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all rescue reports
router.get("/", async (req, res) => {
  const reports = await Rescue.find();
  res.json(reports);
});

module.exports = router;