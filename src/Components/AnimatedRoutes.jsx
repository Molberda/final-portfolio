import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import ProjectsPage from "../Pages/ProjectsPage";
import About from "../Pages/About";
import { AnimatePresence } from "framer-motion";
import Menu from "../Pages/Menu";
import AboutEsp from "../Pages/AboutEsp";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/es/aboutme" element={<AboutEsp />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
