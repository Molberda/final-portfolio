import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <section id="home" className="top__section">
      <div className="container home__container">
        <div className="row home__row">
          <h1 className="home__title">
            Hello! My name is <span className="highlight">David Möller</span>
            <br /> I'm a frontend developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
