import React from "react";

import data from "../data/data.json";

function Skills() {
  const { skills } = data.data;
  const iconpath = "/images/icons/";

  return (
    <section className="px-2" id="skills">
  <div className="container skill-div">
    <div className="title">
      <p>Skills</p>
    </div>

    {/* NEW: wrapper that controls left-to-right layout */}
    <div className="about-containers">
      {skills.map((item) => (
        <div className="details-container" key={item.title}>
          <h2 className="experience-sub-title">{item.title}</h2>

          <div className="article-container">
            {item.skillname.map((s) => (
              <button
                key={s.name}
                type="button"
                className="skill-chip"
                disabled
                aria-label={s.name}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Skills;
