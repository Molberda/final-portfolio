import React from "react";
import "../CSS/ProjectsPage.css";
import { motion as m } from "framer-motion";
import { Projects } from "../Data/ProjectData";
import ProjectsListEsp from "../Components/ProjectsListEsp";

const ProjectsPageEsp = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: "100%", transition: { duration: 0.5, ease: "easeInOut" } }}
      id="projects"
      className="top__section"
    >
      <div className="container projectList__container">
        <div className="row projectList__row">
          <div className="projectList__map">
            {Projects.map((item) => (
              <ProjectsListEsp item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default ProjectsPageEsp;
