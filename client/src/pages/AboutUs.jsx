import React from "react";
import { Mail, MapPin, Phone, Globe, Sparkles, Palette } from "lucide-react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Arteza Gallery</h1>
        <p className="hero-description">
          Bridging the gap between artists and art enthusiasts through an
          immersive digital experience.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          {[
            {
              year: "2020",
              title: "The Beginning",
              description:
                "Founded with a vision to make art accessible to everyone",
            },
            {
              year: "2021",
              title: "Growth & Innovation",
              description:
                "Launched virtual exhibitions and artist collaboration platform",
            },
            {
              year: "2022",
              title: "Global Expansion",
              description: "Reached art enthusiasts in over 50 countries",
            },
            {
              year: "2023",
              title: "Community Building",
              description:
                "Created a thriving community of 10,000+ artists and collectors",
            },
          ].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="cards-section">
        <div className="card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-description">
            To democratize art accessibility by creating a digital space where
            artists can showcase their work to a global audience, and art lovers
            can discover unique pieces from the comfort of their homes.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Our Vision</h2>
          <p className="card-description">
            To become the world's leading virtual art platform, fostering
            connections between artists and collectors while making art
            appreciation accessible to everyone.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {[
            {
              icon: Palette,
              title: "Artistic Excellence",
              description:
                "We champion creativity and support artists in reaching their full potential.",
            },
            {
              icon: Globe,
              title: "Global Inclusivity",
              description:
                "Art knows no boundaries. We connect creators and admirers worldwide.",
            },
            {
              icon: Sparkles,
              title: "Innovation",
              description:
                "Continuously evolving our platform to enhance the digital art experience.",
            },
          ].map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <value.icon />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="features-grid">
          {[
            {
              title: "Virtual Exhibitions",
              description:
                "Immersive online exhibitions featuring curated collections from emerging and established artists.",
            },
            {
              title: "Artist Spotlights",
              description:
                "Regular features highlighting the stories and creative processes of our featured artists.",
            },
            {
              title: "Interactive Tours",
              description:
                "Guided virtual tours that bring art to life through detailed descriptions and artist insights.",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Mail />
              <span>contact@arteza.com</span>
            </div>
            <div className="contact-item">
              <Phone />
              <span>+91 12345-67890</span>
            </div>
            <div className="contact-item">
              <MapPin />
              <span>123 Art Street, Creative District, NY 10001</span>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;