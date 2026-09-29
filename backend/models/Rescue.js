const mongoose = require("mongoose");

const RescueSchema = new mongoose.Schema({
  animalType: String,
  location: String,
  description: String,
  phone: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Rescue", RescueSchema);