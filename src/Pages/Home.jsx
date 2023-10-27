import React from "react";
import "../CSS/Home.css";
import { Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="top__section">
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
            <Button startIcon={<ArrowOutward/>}>My Projects</Button>
            <Button startIcon={<ArrowOutward/>}>About Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
