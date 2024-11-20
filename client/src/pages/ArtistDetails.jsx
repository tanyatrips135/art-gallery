import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ArtistDetails.css";

const ArtistDetails = () => {
  const { id } = useParams(); // Get the artist ID from the URL params
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(null); // To track any errors

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/artists/${id}`);
        if (!response.ok) {
          throw new Error("Artist not found");
        }
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArtistDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>; // Show the error message if there's an issue
  }

  if (!artist) return <p>Loading...</p>;

  return (
    <div className="artist-details">
      <h1>{artist.name}</h1>
      <p>
        <strong>Age:</strong> {artist.age}
      </p>
      <p>
        <strong>Bio:</strong> {artist.bio}
      </p>

      <h2>Artworks</h2>
      <div className="artworks">
        {artist.artworks.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <h3>{artwork.title}</h3>
            <p>
              <strong>Year:</strong> {artwork.year}
            </p>
            <p>
              <strong>Medium:</strong> {artwork.medium}
            </p>
            <p>
              <strong>Dimensions:</strong> {artwork.dimensions}
            </p>
            <p>
              <strong>Price:</strong> ${artwork.price}
            </p>
          </div>
        ))}
      </div>

      <h2>Social Media</h2>
      <ul className="social-media-list">
        <li>
          <a
            href={`https://www.instagram.com/${artist.socialMedia.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href={`https://www.twitter.com/${artist.socialMedia.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href={artist.socialMedia.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </li>
      </ul>

      <h2>Accolades</h2>
      <ul className="accolades-list">
        {artist.accolades.map((accolade, index) => (
          <li key={index}>{accolade}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistDetails;