import React from "react";
import "../CSS/About.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      id="home"
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
