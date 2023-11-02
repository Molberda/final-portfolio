import React from 'react';
import "../CSS/ProjectFocus.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowOutward } from "@mui/icons-material";
import { motion as m } from "framer-motion";
import { Button } from "@mui/material";
import { Projects } from "../Data/ProjectData";


const ProjectFocusEsp = () => {
    const { id } = useParams();
    const project = Projects.find((i) => i.id === +id)
    const navTo = useNavigate();
    return (
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5, ease: "easeInOut" } }}
        exit={{ opacity: 0, transitionDuration: 1 }}
        id="home"
        className="top__section"
      >
        <div className="container home__container">
          <div className="row home__row">
            <div className="home__title">
              <h1>Esta es la pagina de projectos</h1>
              <span className="highlight">
                <p>{project.name}</p>
                <div className="hover-effect"></div>
              </span>
            </div>
            <div className="home__btns">
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
}

export default ProjectFocusEsp;
