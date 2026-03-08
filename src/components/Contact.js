import React from "react";
import data from "../data/data.json";

const Contact = () => {
  const {
    university,
    office,
    personalMail,
    officialMail,
    officewebsite,
    officewebsite2,
    currentAddress,
    permanentAddress,
  } = data.data.contact;

  return (
    <div className="contact-sec" id="contact">
      <div className="container contact-div">
        <div className="title">
          <p>Contact</p>
        </div>

        <div className="contact-card">
          <div className="contact-row">
            <span className="contact-label">University</span>
            <span className="contact-value">{university}</span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Office</span>
            <span className="contact-value">{office}</span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Office Website</span>
            <span className="contact-value">
              <a href={officewebsite} target="_blank" rel="noopener noreferrer">
                {officewebsite}
              </a>
              ,{" "}
              <a
                href={officewebsite2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {officewebsite2}
              </a>
            </span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Personal Mail</span>
            <span className="contact-value">
              <a href={`mailto:${personalMail}`}>{personalMail}</a>
            </span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Official Mail</span>
            <span className="contact-value">
              <a href={`mailto:${officialMail}`}>{officialMail}</a>
            </span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Current Address</span>
            <span className="contact-value">{currentAddress}</span>
          </div>

          <div className="contact-row">
            <span className="contact-label">Permanent Address</span>
            <span className="contact-value">{permanentAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
