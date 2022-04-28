import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import LogoHRnet from "../images/logo_hrnet.png";
import Arrow from "../images/arrow.svg";
import AddEmployee from "../images/add_employee.svg";
import List from "../images/employees_list.svg";

const Home = () => {
  return (
    <>
      <main className="home_main">
        <div className="home_main_container">
          <div className="logo_main_container">
            <h1>HRnet</h1>
            <img src={LogoHRnet} alt="logo de l'application HRnet"/>
          </div>
          <div className="intro_title">
            <h2>Welcome to your employee file management application</h2>
            <p>What would you like to do today ?</p>
          </div>
          <div className="intro_links">
            <NavLink to="/create-employee" className="create_employee_btn">
              <div>
                <img src={AddEmployee} alt="add employee icon" className="icon"/>
                <h3>Add a new employee</h3>
                <img className="icon" src={Arrow} alt="arrow icone"  />
              </div>
            </NavLink>
            <NavLink to="/employee-list" className="employee_list_btn">
              <div>
                <img src={List} alt="list icone" className="icon"/>
                <h3>Consult the list of employees</h3>
                <img className="icon" src={Arrow} alt="arrow icon" />
              </div>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
