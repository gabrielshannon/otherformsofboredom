import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import "./Projects.css";

function Projects() {
  const [projects, setProject] = useState([]);
  const { getProjects } = useContentful();

  useEffect(() => {
    getProjects().then((response) => setProject(response));
  });

  return (
    <section id="section-projects">
      <div className="section-title-project">Project</div>
      <div className="grid-container">
        {projects.map((projects, i) => {
          return (
            <div className="blog-card" key={i}>
              <video
                className="project-image"
                src={projects.media}
                autoPlay
                loop
                muted
              />
              <div className="title-content">
                <div className="project-title">{projects.title}</div>
                <a href={projects.url}>
                  <div className="project-client">{projects.client}</div>
                </a>
                <div className="hr"></div>
              </div>
              <div className="card-info">{projects.description}</div>
              <div>
                <div className="tag-list">
                  {projects.tech.map((t, i) => {
                    return (
                      <div className="tag" key={i}>
                        {t.fields.nameOfTech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
