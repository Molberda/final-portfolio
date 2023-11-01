import React from "react";
import "../CSS/Nav.css";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";

const Nav = () => {
  const navTo = useNavigate();

  return (
    <nav>
      <figure className="nav__logo--wrapper" onClick={() => navTo("/")}>
        <h1>DM</h1>
        <img src="" alt="" className="nav__logo" />
      </figure>
      <div className="nav__right">
        <Button onClick={() => navTo("/")}>
          <p>🇺🇸</p>
        </Button>
        <Button onClick={() => navTo("/es")}>
          <p>🇪🇸</p>
        </Button>
        <IconButton onClick={() => navTo("/menu")}>
          <Menu />
        </IconButton>
      </div>
      <div className="nav__right--desktop">
        <Button onClick={() => navTo("/")}>
          <p>🇺🇸</p>
        </Button>
        <Button onClick={() => navTo("/es")}>
          <p>🇪🇸</p>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
