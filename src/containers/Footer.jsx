import React from "react";
import LogoSocietyWH from "../images/logo_wh.jpg";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <p>©2017-2018</p>
        <img className="logo_wh" src={LogoSocietyWH} alt="Logo de la société WealthHealth  " />
      </div>
    </footer>
  );
};

export default Footer;
