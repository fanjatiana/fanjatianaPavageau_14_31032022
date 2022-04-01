import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to your employee file management application</h2>
        <p>Please choose an action</p>
        <ul>
          <li>
            <NavLink to="/create-employee" className="create_employee_btn">
              Add a new employee
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-list" className="employee_list_btn">
              Consult the list of employees
            </NavLink>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
