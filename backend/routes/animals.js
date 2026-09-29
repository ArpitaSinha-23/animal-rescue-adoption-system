const express = require("express");
const router = express.Router();

const Animal = require("../models/Animal");

// GET all animals
router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new animal
router.post("/", async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();
    res.json(savedAnimal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;