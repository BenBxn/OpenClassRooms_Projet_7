import React from "react";
import "./Header.css";
import logoHeader from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return(
    <header>
      <img src={logoHeader} alt="Logo"/>
      <nav>
        <NavLink to="/" className="lien-menu" style={({ isActive }) => isActive ? {textDecoration: "underline"} : { textDecoration: "unset" }}>Accueil</NavLink>
        <NavLink to="/APropos" className="lien-menu" style={({ isActive }) => isActive ? {textDecoration: "underline"} : { textDecoration: "unset" }}>À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;