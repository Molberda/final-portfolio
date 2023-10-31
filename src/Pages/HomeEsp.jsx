import React from "react";
import "../CSS/Home.css";
import { Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeEsp = () => {
  const navTo = useNavigate();

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transitionDuration: 0.5 }}
      id="home"
      className="top__section"
    >
      <div className="container home__container">
        <div className="row home__row">
          <div className="home__title">
            <h1>Hola, Mi nombre es</h1>
            <span className="highlight">
              <p>David Möller</p>
              <div className="hover-effect"></div>
            </span>
            <h1>y soy un desarrollador de frontend</h1>
          </div>
          <div className="home__btns">
            <Button
              onClick={() => navTo("/es/projects")}
              startIcon={<ArrowOutward />}
            >
              Mis proyectos
            </Button>
            <Button onClick={() => navTo("/es/aboutme")} startIcon={<ArrowOutward />}>
              Acerca de Mi
            </Button>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default HomeEsp;
