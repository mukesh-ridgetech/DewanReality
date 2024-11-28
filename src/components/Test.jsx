import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/test.css";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Buy"); // Default active item is "Buy"

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="path-to-your-logo.png"
            alt="Diwan Realty"
            className="navbar-logo"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className={`nav-item ${active === "Buy" ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("Buy")}
            >
              Buy
            </a>
          </li>
          <li className={`nav-item ${active === "Rent" ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("Rent")}
            >
              Rent
            </a>
          </li>
          <li
            className={`nav-item ${
              active === "Upcoming Projects" ? "active" : ""
            }`}
          >
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("Upcoming Projects")}
            >
              Upcoming Projects
            </a>
          </li>
          <li className={`nav-item ${active === "Sell" ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("Sell")}
            >
              Sell
            </a>
          </li>
          <li className={`nav-item ${active === "Blog" ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("Blog")}
            >
              Blog
            </a>
          </li>
          <li className={`nav-item ${active === "About Us" ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={() => handleActive("About Us")}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Test;
