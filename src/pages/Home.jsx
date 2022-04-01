import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>
          Bienvenue sur votre application de gestion de dossiers employés{" "}
        </h2>
        <p>Veuillez choisir une action</p>
        <ul>
          <li>
            <NavLink to="/create-employee" className="create_employee_btn">
              Ajouter un nouvel employé
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-list" className="employee_list_btn">
              Consulter la liste des employés
            </NavLink>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
