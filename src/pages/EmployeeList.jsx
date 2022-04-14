import React from "react";
import { useTable, usePagination } from "react-table";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Table from "../components/Table";
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
    <Table columns={columns} data={data} />
  )
};

export default EmployeeList;
