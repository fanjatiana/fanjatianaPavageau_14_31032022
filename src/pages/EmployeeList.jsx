import React from "react";
import { useAppSelector } from "../app/hooks";
import Table from "../components/Table";
import Header from "../containers/Header";
import "../styles/EmployeesList.css";

// employee list page
const EmployeeList = () => {
  const employee = useAppSelector((state) => state.employees);

  // React.useMemo() : Hook returns a memoized value.
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department.value",
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "States",
        accessor: "states.value",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  const data = React.useMemo(() => employee, [employee]);

  return (
    <>
      <Header />
      <main className="employees_list_container">
        <h3>Employee List</h3>
        <Table columns={columns} data={data} />
      </main>
    </>
  );
};

export default EmployeeList;
