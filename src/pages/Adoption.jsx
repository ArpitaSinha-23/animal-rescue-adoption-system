import React, { useState } from "react";
import axios from "axios";
import "./Adoption.css";

function Adoption() {
  const [form, setForm] = useState({
    petName: "",
    adopterName: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/adoption", form);

      alert("Adoption Request Submitted!");

      setForm({
        petName: "",
        adopterName: "",
        email: "",
        phone: "",
        address: "",
        reason: "",
      });
    } catch {
      alert("Submission Failed!");
    }
  };

  return (
    <div className="adoption-wrapper">
      <div className="adoption-card">
        <h2>🐶 Adoption Application</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="petName"
            placeholder="Pet Name"
            value={form.petName}
            onChange={handleChange}
          />

          <input
            name="adopterName"
            placeholder="Your Name"
            value={form.adopterName}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />

          <textarea
            name="reason"
            placeholder="Why do you want to adopt this pet?"
            value={form.reason}
            onChange={handleChange}
          />

          <button type="submit">Submit Adoption Request</button>
        </form>
      </div>
    </div>
  );
}

export default Adoption;