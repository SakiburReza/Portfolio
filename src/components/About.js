import React from "react";

import data from "../data/data.json";

const About = () => {
  const { aboutDescription, aboutImage } = data.data;

  const imagepath = "/images/about/";
  const { fullName } = data.data;

  return (
    <section className="px-2 about-section" id="about">
      <div className="container aboutdiv">
        <div className="title">
          <p>About</p>
        </div>

        <div className="about-card">
          <div className="row align-items-center flex-md-row-reverse g-4">
            <div className="col-12 col-md-4">
              <div className="about-image-wrap">
                <img
                  src={imagepath + aboutImage}
                  className="about-img img-fluid"
                  width={880}
                  height={880}
                  alt={`${fullName}'s headshot`}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-12 col-md-8 about-text">
              {aboutDescription.map((sentence, idx) => (
                <p className="about-paragraph" key={idx}>
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
