import React from "react";

const SelectDepartment = () => {
  return (
    <>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
    </>
  );
};

export default SelectDepartment;
