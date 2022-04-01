import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav_links_list">
      <ul>
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
  );
};

export default Nav;
