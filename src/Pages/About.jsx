import React from "react";
import "../CSS/About.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.section
    initial={{ x: "100%" }}
    animate={{ x: 0, transition: { duration: 0.5 } }}
    exit={{ x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
    id="about"
      className="top__section"
    >
      <div className="container home__container">
        <div className="row home__row">
          <div className="home__title">
            <h1>THis is menu page</h1>
            <span className="highlight">
              <p>David Möller</p>
              <div className="hover-effect"></div>
            </span>
            <h1>I'm a frontend developer</h1>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default About;
