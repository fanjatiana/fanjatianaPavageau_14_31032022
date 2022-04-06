import React from "react";

const Form = () => {
  return (
    <div className="form-create-employee">
      <form action="#" id="create-employee">
        <div className="input-wrapper">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <p></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <p></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="text" id="date-of-birth" />
          <p></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" />
          <p></p>
        </div>
        <div>
          <fieldset class="address">
            <legend>Address</legend>
            <div className="input-wrapper">
              <label for="street">Street</label>
              <input id="street" type="text" />
              <p></p>
            </div>
            <div className="input-wrapper">
              <label for="city">City</label>
              <input id="city" type="text" />
              <p></p>
            </div>
            <div className="input-wrapper">
              <label for="state">State</label>
              <select name="state" id="state"></select>
              <p></p>
            </div>
            <div className="input-wrapper">
              <label for="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
              <p></p>
            </div>
          </fieldset>
        </div>
        <div>
          <label for="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>
      <button onclick="saveEmployee()">Save</button>
      <div id="confirmation" class="modal">
        Employee Created!
      </div>
    </div>
  );
};

export default Form;
