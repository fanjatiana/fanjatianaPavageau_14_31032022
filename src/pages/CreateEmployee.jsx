import React from "react";
import Form from "../components/Form";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

import "../styles/CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <>
      <Header />
      <main className="create-employee-container">
        <h2>Create Employee</h2>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default CreateEmployee;
