import React from "react";
import { Link } from "react-router-dom";
import "../styles/Category.css";

const Category = ({ imageSrc, text }) => (
  <div
    className="container23"
    style={{ display: "inline-block", margin: "35px" }}
  >
    <img src={imageSrc} alt={text} className="image23" />
    <div className="overlay34">
      <Link to={`${text.toLowerCase().replaceAll(" ", "")}`}>
        <div className="text">{text}</div>
      </Link>
    </div>
  </div>
);

export default Category;