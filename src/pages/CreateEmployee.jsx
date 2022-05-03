import React from "react";
import Form from "../components/Form";
import Header from "../containers/Header";
import "../styles/CreateEmployee.css";

// create employee page
const CreateEmployee = () => {
  return (
    <>
      <Header />
      <main className="create-employee-container">
        <h3>Create Employee</h3>
        <Form />
      </main>
    </>
  );
};

export default CreateEmployee;
