import React from "react";
import data from "../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const { projects } = data.data;
  const imgpath = "/images/projects/";

  // Icons
  const open = "/images/icons/open.png";
  const githubgrey = "/images/icons/github-grey.png";

  return (
    <section className="px-2" id="projects">
      <div className="container project-div">
        <div className="title">
          <p>Projects</p>
        </div>

        <div className="project project-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={`${project.projectName}-${index}`}
            >
              <div
                className={
                  index % 2 === 0
                    ? "row g-0 project-row"
                    : "row g-0 project-row flex-row-reverse"
                }
              >
                <div className="col-lg-5">
                  <div className="project-image-wrap">
                    {project.projectImage?.length > 0 ? (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="project-carousel"
                      >
                        {project.projectImage.map((img, i) => (
                          <SwiperSlide key={i}>
                            <img
                              src={imgpath + img}
                              alt={`${project.projectName} screenshot ${i + 1}`}
                              className="project-image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : null}

                    {/* Fallback overlay (always present, visible if image fails) */}
                    <div className="project-image-placeholder">
                      <span>{project.projectName}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Content */}
                <div className="col-lg-7">
                  <div className="project-body">
                    <div className="project-header">
                      <h5 className="project-type">{project.projectType}</h5>
                      <h3 className="project-title">{project.projectName}</h3>
                    </div>

                    <div className="project-tech">
                      {project.techStack.map((item) => (
                        <span className="project-tech-chip" key={item.name}>
                          {item.name}
                        </span>
                      ))}
                    </div>

                    <p className="project-desc">{project.description}</p>

                    <div className="project-actions">
                      {project.githubLink?.length > 1 && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn project-btn project-btn-secondary"
                        >
                          <img
                            src={githubgrey}
                            className="skill-icon mx-2"
                            alt="Github Icon"
                          />
                          <span className="me-2">Source</span>
                        </a>
                      )}

                      {project.liveLink?.length > 1 && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn project-btn project-btn-primary"
                        >
                          <img
                            src={open}
                            className="skill-icon mx-2"
                            alt="Project Live Icon"
                          />
                          <span className="me-2">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
