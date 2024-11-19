import React from "react";
import { useState, useEffect } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import "../styles/Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // State to track if audio is muted
  const slides = [
    {
      src: "/monet/paintings/water_lillies_monet.png",
      title: "Water Lilies",
    },
    {
      src: "/monet/paintings/the_artists_garden_at_giverny.png",
      title: "The Artist's Garden at Giverny",
    },
    {
      src: "/monet/paintings/Impression_Sunrise_by_Claude_Monet.png",
      title: "Impression, Sunrise",
    },
  ];

  const featuredArtwork = {
    src: "/The_Boat_Trip_by_Mary_Cassatt.png",
    title: "The Boat Trip - Mary Cassatt",
  };

  const artistOfTheMonth = {
    name: "Claude Monet",
    image: "/monet/claude_monet.png",
    birthdate: "14 November 1840, Rue Laffitte, Paris, France",
    bio: "Oscar-Claude Monet was a French painter and founder of impressionism painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it.",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change the slide every 3 seconds

    // Try to play the audio when the component mounts
    const audio = document.getElementById("background-music");
    if (audio) {
      audio.muted = isMuted; // Set the initial muted state based on isMuted
      audio.play().catch((error) => {
        // Handle autoplay block error if necessary
        console.warn("Autoplay blocked. Audio requires user interaction.");
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, [slides.length, isMuted]);

  // Toggle mute/unmute
  const toggleMute = () => {
    const audio = document.getElementById("background-music");
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="homepage">
      <audio id="background-music" loop autoPlay>
        <source src="/mia_sebastians_theme.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? (
          <VolumeX size={20} color="#846c5c" /> // Mute icon
        ) : (
          <Volume2 size={20} color="#846c5c" /> // Unmute icon
        )}
      </button>

      {/* Slideshow */}
      <div id="slideshow">
        <h2>Gallery Highlights</h2>
        <div className="slideshow-wrapper">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.title}
                className={index === currentSlide ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      {/* Featured Artwork */}
      <div id="featured-week">
        <h2>Featured Artwork of the Week</h2>
        <img
          id="featured-artwork"
          src={featuredArtwork.src}
          alt={featuredArtwork.title}
        />
        <p id="featured-title">{featuredArtwork.title}</p>
      </div>
      <br />
      {/* Artist of the Month */}
      <div id="month-feature">
        <h2>Artist of the Month</h2>
        {artistOfTheMonth ? (
          <>
            <img
              id="artist-artwork"
              src={artistOfTheMonth.image}
              alt={artistOfTheMonth.name}
            />
            <p id="artist-name">Born: {artistOfTheMonth.birthdate}</p>
            <p>{artistOfTheMonth.bio}</p>
          </>
        ) : (
          <p>No featured artist for this month.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
