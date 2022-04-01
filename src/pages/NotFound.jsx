import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <h2>404</h2>
        <p>Ooops page non trouvée</p>
      </div>
      <div>
        <NavLink to="/" alt="link_back_to_home">
          Retour vers la page d'Accueil
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
