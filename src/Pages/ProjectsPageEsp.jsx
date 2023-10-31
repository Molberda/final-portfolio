import React from "react";
import "../CSS/ProjectsPage.css";
import { motion as m } from "framer-motion";
import { Projects } from "../ProjectData";
import ProjectsList from "../Components/ProjectsList";

const ProjectsPageEsp = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      id="home"
      className="top__section"
    >
      <div className="container projectList__container">
        <div className="row projectList__row">
          <div className="projectList__map">
            {Projects.map((item) => (
              <ProjectsList item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default ProjectsPageEsp;
