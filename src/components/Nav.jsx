import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import List from "../images/employees_list.svg";
import AddEmployee from "../images/add_employee.svg";

// app navigation
const Nav = () => {
  
  // underline navigation links (css) when active
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(isActive);
  };

  return (
    <div className="block_nav_links">
      <nav>
        <ul className="nav_links">
          <li>
            <NavLink
              to="/create-employee"
              className={isActive ? " active" : "create_employee_link"}
              onClick={handleClick}
            >
              <img src={AddEmployee} alt="add employee icon" loading="lazy"/>
              <h2>Create Employee</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employee-list"
              className={isActive ? " active" : "employee_list_link"}
              onClick={handleClick}
            >
              <img src={List} alt="list icone" loading="lazy"/>
              <h2>Employee List</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
