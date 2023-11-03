import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowOutward } from "@mui/icons-material";
import { motion as m } from "framer-motion";
import { Button } from "@mui/material";
import { Projects } from "../Data/ProjectData";
import "../CSS/ProjectFocus.css";

const ProjectFocus = () => {
  const { id } = useParams();
  const project = Projects.find((i) => i.id === +id);
  const navTo = useNavigate();
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2.5, ease: "easeInOut" } }}
      exit={{ opacity: 0, transitionDuration: 1 }}
      id="projectFocus"
      className="top__section"
    >
      <div className="container projectFocus__container">
        <div className="row projectFocus__row">
          <div className="projectFocus__title">
            <span className="highlight">
              <h1>{project.name}</h1>
            </span>
          </div>
          <div className="projectFocus__btns">
            <Button
              onClick={() => navTo("/projects")}
              startIcon={<ArrowOutward />}
            >
              My Projects
            </Button>
            <Button
              onClick={() => navTo("/aboutme")}
              startIcon={<ArrowOutward />}
            >
              About Me
            </Button>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default ProjectFocus;
