import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Artists.css";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/artists");
        const data = await response.json();
        setArtists(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching artists:", error);
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="artistcontainer">
      <h1>Artists</h1>
      <div className="artistgrid">
        {artists.map((artist) => (
          <div key={artist._id} className="artistcard">
            <Link to={`/artists/${artist._id}`}>
              <h3>{artist.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;