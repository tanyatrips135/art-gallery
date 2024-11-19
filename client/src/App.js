import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Paintings from "./pages/Paintings";
import Artists from "./pages/Artists";
import ArtistDetails from "./pages/ArtistDetails";
import Events from "./pages/Events";
import ArtShop from "./pages/ArtShop";
import ArtistSubmission from "./pages/ArtistSubmission";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:artist" element={<Paintings />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<ArtShop />} />
        <Route path="/selling" element = {<ArtistSubmission />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
