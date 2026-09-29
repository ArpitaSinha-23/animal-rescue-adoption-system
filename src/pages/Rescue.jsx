import React, { useState } from "react";
import axios from "axios";
import "./Rescue.css";

function Rescue() {
  const [report, setReport] = useState({
    animalType: "",
    location: "",
    description: "",
    phone: "",
  });

  const handleChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/rescue", report);
      alert("Rescue Report Submitted!");

      setReport({
        animalType: "",
        location: "",
        description: "",
        phone: "",
      });
    } catch {
      alert("Failed to submit report.");
    }
  };

  return (
    <div className="rescue-wrapper">
      <div className="rescue-card">
        <h2>🚑 Report an Animal Rescue</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="animalType"
            placeholder="Animal Type"
            value={report.animalType}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location Found"
            value={report.location}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Describe the condition..."
            value={report.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={report.phone}
            onChange={handleChange}
          />

          <button type="submit">Submit Rescue Report</button>
        </form>
      </div>
    </div>
  );
}

export default Rescue;