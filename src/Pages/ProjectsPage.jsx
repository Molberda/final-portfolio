import React from "react";
import "../CSS/ProjectsPage.css";
import { motion as m } from "framer-motion";
import ProjectsList from "../Components/ProjectsList";
import { Projects } from "../Data/ProjectData";

const ProjectsPage = () => {
  return (
    <m.section
      initial={{ y: '100%' }}
      animate={{ y: 0 , transition: { duration: .5 } }}
      exit={{ y: '100%', transition: { duration: .5, ease: 'easeInOut' } }}
      id="projects"
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

export default ProjectsPage;
