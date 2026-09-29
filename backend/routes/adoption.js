const express = require("express");
const router = express.Router();
const Adoption = require("../models/Adoption");

// Save adoption application
router.post("/", async (req, res) => {
  try {
    const application = new Adoption(req.body);
    const savedApplication = await application.save();
    res.json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all applications
router.get("/", async (req, res) => {
  const applications = await Adoption.find();
  res.json(applications);
});

module.exports = router;