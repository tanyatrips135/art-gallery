import React, { useState } from "react";
import "../styles/ArtistSubmission.css";

const ArtistSubmission = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    artMedium: "",
    portfolio: "",
    vision: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); // Debugging: Check if value is captured
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setFormData({
          fullName: "",
          email: "",
          artMedium: "",
          portfolio: "",
          vision: "",
        });
        alert("Form submitted successfully! Thank you for your submission.");
      } else {
        alert(`Error submitting form: ${response.statusText}`);
      }
    } catch (error) {
      alert(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div>
      <br />
      <div className="form-container">
        <div className="form-header">
          <h1>Artist Showcase</h1>
          <p>Illuminate your artistic journey, apply here!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="artMedium"
              value={formData.artMedium}
              onChange={handleChange}
              required
            >
              <option value="">Select Art Medium</option>
              <option>Painting</option>
              <option>Sculpture</option>
              <option>Digital Art</option>
              <option>Photography</option>
              <option>Mixed Media</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="url"
              className="form-control"
              name="portfolio"
              placeholder="Portfolio/Website URL"
              value={formData.portfolio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="vision"
              placeholder="Tell us about your artistic vision..."
              value={formData.vision}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default ArtistSubmission;