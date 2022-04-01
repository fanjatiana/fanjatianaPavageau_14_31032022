import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <main>
        <div className="home_main_container">
          <div className="intro_title">
            <h2>Welcome to your employee file management application</h2>
            <p>Please choose an action</p>
          </div>
          <div className="intro_links">
            <NavLink to="/create-employee" className="create_employee_btn">
              Add a new employee
            </NavLink>
            <NavLink to="/employee-list" className="employee_list_btn">
              Consult the list of employees
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
