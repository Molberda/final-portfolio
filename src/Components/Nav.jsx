import React from "react";
import "../CSS/Nav.css";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const Nav = () => {

  const navTo = useNavigate();

 
  return (
    <nav>
      <figure className="nav__logo--wrapper" onClick={() => navTo('/')}>
        <h1>DM</h1>
        <img src="" alt="" className="nav__logo" />
      </figure>
      <IconButton onClick={() => navTo("/menu")}>
        <Menu />
      </IconButton>
    </nav>
  );
};

export default Nav;
