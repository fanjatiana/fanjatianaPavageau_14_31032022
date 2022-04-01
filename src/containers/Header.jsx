import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import LogoHRnet from "../images/logo_hrnet.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="banner">
        <div className="block_logo_hrnet">
          <NavLink to="/" className="logo_hrnet_link">
            <h1>
              <img src={LogoHRnet} alt="logo de l'application HRnet" />
            </h1>
          </NavLink>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
