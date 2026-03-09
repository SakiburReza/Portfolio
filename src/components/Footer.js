import data from "../data/data.json";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const { socialLinks } = data.data;

  return (
    <footer className="footer-section px-2">
      <div className="container footer-container">

        <div className="footer-social">

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-instagram"></i>
          </a>

        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Built by
          <span className="footer-name"> Sakibur Reza</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;