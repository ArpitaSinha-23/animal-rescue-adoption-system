const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
    default: "Available",
  },
});

module.exports = mongoose.model("Animal", AnimalSchema);