import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import data from '../data/data.json'

function Navbar() {

    let location = useLocation();

    const { fullName, logo, email, socialLinks } = data.data

    const imagepath = "/images/logo/"

    return (
        <div>
  <div className="fixed-top">
    

    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark main-navbar">
      <div className="container-fluid">
        <a className="navbar-brand p-0 brand" href="#top">
          <img
            src={imagepath + logo}
            alt={`${fullName} - logo`}
            className="me-2 nav-logo"
          />
          <span className="brand-name">{fullName}</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-group">
            <NavHashLink
              className={`${location.pathname}${location.hash}` === `/#top` || `${location.pathname}${location.hash}` === `/`
                ? "active1 nav-link nav-item-link"
                : "nav-link nav-item-link"}
              to="#top"
            >
              Home
            </NavHashLink>

            <NavHashLink
              className={`${location.pathname}${location.hash}` === `/#about`
                ? "active1 nav-link nav-item-link"
                : "nav-link nav-item-link"}
              to="#about"
            >
              About
            </NavHashLink>

            <NavHashLink
              className={`${location.pathname}${location.hash}` === `/#skills`
                ? "active1 nav-link nav-item-link"
                : "nav-link nav-item-link"}
              to="#skills"
            >
              Skills
            </NavHashLink>

            <NavHashLink
              className={`${location.pathname}${location.hash}` === `/#projects`
                ? "active1 nav-link nav-item-link"
                : "nav-link nav-item-link"}
              to="#projects"
            >
              Projects
            </NavHashLink>

            <NavHashLink
              className={`${location.pathname}${location.hash}` === `/#contact`
                ? "active1 nav-link nav-item-link"
                : "nav-link nav-item-link"}
              to="#contact"
            >
              Contact
            </NavHashLink>

            {/* CTA */}
            <a className="btn nav-cta" href={`mailto:${email}`}>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  {/* Side Sticky Social Icons (just add rel + aria-labels) */}
  <div id="contact-left">
    <div id="contact-left-links">
      <a target="_blank" rel="noreferrer" href={socialLinks.github} aria-label="GitHub">
        <i className="fab fa-github" />
      </a>
      <a target="_blank" rel="noreferrer" href={socialLinks.linkedin} aria-label="LinkedIn">
        <i className="fab fa-linkedin-in" />
      </a>
      <a target="_blank" rel="noreferrer" href={`mailto:${email}`} aria-label="Email">
        <i className="fas fa-envelope" />
      </a>
      <a target="_blank" rel="noreferrer" href={socialLinks.instagram} aria-label="Instagram">
        <i className="fab fa-instagram" />
      </a>
    </div>
    <div id="contact-line" />
  </div>
</div>

    )
}

export default Navbar
