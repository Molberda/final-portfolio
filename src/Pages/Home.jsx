import React from "react";
import "../CSS/Home.css";
import { Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navTo = useNavigate();

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2.5, ease: 'easeInOut'} }}
      exit={{ opacity: 0, transitionDuration: 1 }}
      id="home"
      className="top__section"
    >
      <div className="container home__container">
        <div className="row home__row">
          <div className="home__title">
            <h1>Hello! My name is</h1>
            <span className="highlight">
              <p>David Möller</p>
              <div className="hover-effect"></div>
            </span>
            <h1>I'm a frontend developer</h1>
          </div>
          <div className="home__btns">
            <Button
              onClick={() => navTo("/projects")}
              startIcon={<ArrowOutward />}
            >
              My Projects
            </Button>
            <Button onClick={() => navTo("/aboutme")} startIcon={<ArrowOutward />}>
              About Me
            </Button>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Home;
