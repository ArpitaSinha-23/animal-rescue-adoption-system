import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [featuredPets, setFeaturedPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/animals");
        setFeaturedPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="homepage">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🐾 RescuePaws</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#adopt">Adopt</a></li>
          <li><a href="/rescue">Report Rescue</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>Save a Life, Adopt a Friend</h1>

          <p>
            Every animal deserves a loving home. Help us rescue,
            rehabilitate, and rehome animals in need.
          </p>

          <div className="hero-buttons">
            <a href="#adopt" className="btn btn-primary">
              Adopt Now
            </a>

            <a href="/rescue" className="btn btn-secondary">
              Report Emergency
            </a>

            <a href="/login" className="btn btn-login">
              Login
            </a>

            <a href="/register" className="btn btn-register">
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Featured Pets Section */}
      <section id="adopt" className="pets-section">
        <h2>Pets Available for Adoption</h2>

        <div className="pet-cards">
          {featuredPets.map((pet) => (
            <div key={pet._id} className="pet-card">

              <img
                src={
                  pet.species === "Dog"
                    ? "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400"
                    : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400"
                }
                alt={pet.name}
              />

              <div className="pet-info">
                <h3>{pet.name}</h3>

                <p><strong>Type:</strong> {pet.species}</p>

                <p><strong>Breed:</strong> {pet.breed}</p>

                <p><strong>Age:</strong> {pet.age} years</p>

                <a href="/adoption" className="btn btn-adopt">
                  Adopt {pet.name}
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Rescue Section */}
      <section id="report" className="report-section">
        <h2>Spotted an Animal in Distress?</h2>

        <p>
          Report injured or abandoned animals directly to our rescue team.
        </p>

        <a href="/rescue" className="btn btn-emergency">
          Report a Rescue
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
  <h2>Contact RescuePaws</h2>

  <p>Need help? Reach out to our rescue team anytime.</p>

  <div className="contact-info">
    <p>📞 +91 9876543210</p>
    <p>📧 rescuepaws@gmail.com</p>
    <p>📍 Mumbai, Maharashtra</p>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 RescuePaws Animal Rescue & Adoption System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;