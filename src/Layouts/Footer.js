import React from "react";
import "./Footer.css";
import logoFooter from "../Assets/LogoFooter.png";

function Footer() {
  return(
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;