import React from "react";

import { Typewriter } from "react-simple-typewriter";

import data from "../data/data.json";

const Hero = () => {
  const { fullName, titleArray, subTitle, resumeView, resumeDownload } = data.data;

  return (
    <section id="home" className="hero-section px-2">
      <div className="container hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h4 className="hero-kicker">Hello! This is</h4>

            <h1 className="hero-title">{fullName}</h1>

            <div className="hero-type">
              <span className="hero-type-text">
                <Typewriter
                  words={titleArray}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <p className="hero-subtitle">{subTitle}</p>

            <div className="hero-actions">
              <a
                className="btn btn-lg work-btn hero-primary"
                href={resumeView}
                target="_blank"
                rel="noreferrer"
              >
                See CV
              </a>

              <a
                className="btn btn-lg hero-secondary"
                href={resumeDownload}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
