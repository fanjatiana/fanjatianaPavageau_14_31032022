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
              Create Employee
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-list" className="employee_list_btn">
              Employee List
            </NavLink>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
