import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <div className="block_nav_links">
      <nav>
        <ul className="nav_links">
          <li>
            <NavLink to="/" className="home_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-employee" className="create_employee_link">
              Create Employee
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-list" className="employee_list_link">
              Employee List
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
