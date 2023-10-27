import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import ProjectList from "../Pages/ProjectList";
import About from "../Pages/About";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/aboutme" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
