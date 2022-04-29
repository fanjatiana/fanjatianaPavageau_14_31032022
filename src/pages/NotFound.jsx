import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.css";

import IMG404 from "../images/404.png";
const NotFound = () => {
  return (
    <>
      <main className="main_404page">
        <div className="error">
          <div className="error_message">
            <h1>Error 404</h1>
            <p>Ooops page not found</p>
          </div>
          <div className="btn_back_home">
            <NavLink to="/" alt="link_back_to_home">
              <div>
                <p>Go Back</p>
              </div>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
