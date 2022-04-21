import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  const [isActive, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!isActive);
  }
  return (
    <div className="block_nav_links">
      <nav>
        <ul className="nav_links">
          <li>
            <NavLink to="/" className= "home_link" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-employee" className={isActive? ' create_employee_link active' : "create_employee_link"} onClick={handleClick} >
              Create Employee
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-list" className={isActive? ' employee_list_link active' : "employee_list_link"} onClick={handleClick}>
              Employee List
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
