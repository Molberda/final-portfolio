import React from "react";
import "../CSS/About.css";
import { motion as m } from "framer-motion";

const AboutEsp = () => {
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
            <h1>Esta es la pagina de menu</h1>
            <span className="highlight">
              <p>David Möller</p>
              <div className="hover-effect"></div>
            </span>
            <h1>espanol</h1>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default AboutEsp;
