import React from "react";
import { useTable, usePagination } from "react-table";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Table from "../components/Table";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
const EmployeeList = () => {
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
    const employee = useAppSelector(state => state.employees);
    const data = React.useMemo(() => employee, [])
  return (
    <>
    <Header />
    <Table columns={columns} data={data} />
    <Footer />
    </>
    
  )
};

export default EmployeeList;
