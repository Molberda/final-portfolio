import React, { useState } from "react";
import "../CSS/Nav.css";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";

const Nav = () => {
  const [language, setLanguage] = useState("english");

  const navTo = useNavigate();

  const translate = (value, lang) => {
    setLanguage(lang);
    navTo(value);
  };

  return (
    <nav>
      {language === "english" ? (
        <figure className="nav__logo--wrapper" onClick={() => navTo("/")}>
          <h1>DM</h1>
          <img src="" alt="" className="nav__logo" />
        </figure>
      ) : (
        <figure className="nav__logo--wrapper" onClick={() => navTo("/es")}>
          <h1>DM</h1>
          <img src="" alt="" className="nav__logo" />
        </figure>
      )}
      <div className="nav__right">
        <Button onClick={() => translate("/", "english")}>
          <p>🇺🇸</p>
        </Button>
        <Button onClick={() => translate("/es", "spanish")}>
          <p>🇪🇸</p>
        </Button>
        <IconButton onClick={() => navTo("/menu")}>
          <Menu />
        </IconButton>
      </div>
      <div className="nav__right--desktop">
        <Button onClick={() => navTo("/")}>Eng</Button>
        <Button onClick={() => navTo("/es")}>Esp</Button>
      </div>
    </nav>
  );
};

export default Nav;
