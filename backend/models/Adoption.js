const mongoose = require("mongoose");

const AdoptionSchema = new mongoose.Schema({
  petName: String,
  adopterName: String,
  email: String,
  phone: String,
  address: String,
  reason: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Adoption", AdoptionSchema);