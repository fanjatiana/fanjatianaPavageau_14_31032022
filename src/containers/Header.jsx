import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import LogoHRnet from "../images/logo_hrnet.png";

const Header = () => {
  return (
    <>
      <div>
        <NavLink to="/" className="logo_hrnet_link">
          <h1>
            <img src={LogoHRnet} alt="logo de l'application HRnet" />
          </h1>
        </NavLink>
      </div>
      <Nav />
    </>
  );
};

export default Header;
