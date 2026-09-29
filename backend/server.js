const adoptionRoutes = require("./routes/adoption");
const rescueRoutes = require("./routes/rescue");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const animalRoutes = require("./routes/animals");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.use("/api/animals", animalRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rescue", rescueRoutes);
app.use("/api/adoption", adoptionRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});