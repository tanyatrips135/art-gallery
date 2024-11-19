import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Paintings.css"; // Import the CSS file

const Paintings = () => {
  const { artist } = useParams(); // Category like 'davinci', 'monet', etc.
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/categories/${artist}/paintings`
        );
        const data = await response.json(); // list of names of paintings
        setPaintings(data); // Store the painting filenames
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    };

    fetchPaintings();
  }, [artist]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h1>{capitalizeFirstLetter(artist)}'s Paintings</h1>
      <div className="paintings-gallery">
        {paintings.map((painting, index) => (
          <div key={index} className="painting-item">
            <img
              src={`/${artist}/paintings/${painting}`}
              alt={`Painting ${index}`}
              className="painting-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
