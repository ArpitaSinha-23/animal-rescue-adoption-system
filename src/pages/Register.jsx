import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Update input values
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        user
      );

      alert("Registration Successful!");
      console.log(response.data);

      // Clear form
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (error) {
      alert("Registration Failed!");
      console.error(error);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Create Your Account 🐾</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;