import React from "react";
import "../CSS/ProjectList.css";
import { motion as m } from "framer-motion";
import { Projects } from "../ProjectData";

const ProjectList = () => {
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
          {Projects.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </div>
      </div>
    </m.section>
  );
};

export default ProjectList;
