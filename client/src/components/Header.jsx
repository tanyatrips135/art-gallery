import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>ARTEZA</h1>
        <p className="slogan">Capturing timeless art</p>
      </header>

      <div className="header" id="nav">
        <span className="font-light" style={{ fontSize: "20px" }}>
          <a href="/">Home</a>&nbsp;|&nbsp;
          <a href="/collections">Collections</a>&nbsp;|&nbsp;
          <a className="navlink" href="/artists">
            Artists
          </a>
          &nbsp;|&nbsp;
          <a href="/events">Events</a>&nbsp;|&nbsp;
          <a href="/selling">Selling</a>&nbsp;|&nbsp;
          <a href="/shop">Shop</a>&nbsp;|&nbsp;
          <a href="/aboutus">About Us</a>
        </span>
      </div>
    </div>
  );
};
export default Header;
