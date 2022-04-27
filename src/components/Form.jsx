import React, { useState } from "react";
//import Modal from "react-form-validation-message";
import { useForm, Controller } from "react-hook-form";
import FormModal from "react-nmp-modal";
import Select from "react-select";
import { useAppDispatch } from "../app/hooks";
import { departments, states } from "../constants/arrays";
import { registerOptions } from "../constants/objects";
import { addNewEmployee } from "../features/employee/employeeSlice";

import "../styles/Form.css";

const Form = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleError = (errors) => {};

  const handleRegistration = (data) => {
    dispatch(
      addNewEmployee({
        firstName: data.firstname,
        lastName: data.lastname,
        dateOfBirth: data.dateofbirth,
        startDate: data.startdate,
        department: data.department,
        street: data.street,
        city: data.city,
        states: data.states,
        zipCode: data.zipcode,
      })
    );
    setIsShowing(true);
  };

  const [isShowing, setIsShowing] = useState(false);
  const handleClickToClose = () => {
    setIsShowing(!isShowing);
    reset();
  };

  return (
    <>
      <form
        className="create-employee-form"
        onSubmit={handleSubmit(handleRegistration, handleError)}
      >
        <div className="form_container">
          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input
              name="firstname"
              type="text"
              {...register("firstname", registerOptions.firstname)}
            />
            <p className="text-danger">
              {errors?.firstname && errors.firstname.message}
            </p>
          </div>

          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              type="text"
              {...register("lastname", registerOptions.lastname)}
            />
            <p className="text-danger">
              {errors?.lastname && errors.lastname.message}
            </p>
          </div>

          <div className="input">
            <label htmlFor="dateofbirth">Date of Birth</label>
            <input
              type="date"
              name="dateofbirth"
              {...register("dateofbirth", registerOptions.dateofbirth)}
            />
            <p className="text-danger">
              {errors?.dateofbirth && errors.dateofbirth.message}
            </p>
          </div>
          <div className="input">
            <label htmlFor="startdate">Start Date</label>
            <input
              type="date"
              name="startdate"
              {...register("startdate", registerOptions.startdate)}
            />
            <p className="text-danger">
              {errors?.startdate && errors.startdate.message}
            </p>
          </div>

          <div className="field_address">
            <fieldset className="address">
              <legend>Address</legend>
              <div className="input">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  name="street"
                  {...register("street", registerOptions.street)}
                />
                <p className="text-danger">
                  {errors?.street && errors.street.message}
                </p>
              </div>
              <div className="input">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  {...register("city", registerOptions.city)}
                />
                <p className="text-danger">
                  {errors?.city && errors.city.message}
                </p>
              </div>
              <div className="select">
                <label htmlFor="states">States</label>
                <Controller
                  name="states"
                  control={control}
                  defaultValue=""
                  rules={registerOptions.states}
                  render={({ field }) => (
                    <Select options={states} {...field} label="Text field" />
                  )}
                />
                <small className="text-danger">
                  {errors?.states && errors.states.message}
                </small>
              </div>
              <div className="input">
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  {...register("zipcode", registerOptions.zipcode)}
                />
                <p className="text-danger">
                  {errors?.zipcode && errors.zipcode.message}
                </p>
              </div>
            </fieldset>
          </div>

          <div className="select_department">
            <label htmlFor="department">Department</label>
            <Controller
              name="department"
              control={control}
              defaultValue=""
              rules={registerOptions.department}
              render={({ field }) => (
                <Select options={departments} {...field} label="Text field" />
              )}
            />
            <small className="text-danger">
              {errors?.department && errors.department.message}
            </small>
          </div>
        </div>

        <div className="btn-submit">
          <button>Submit</button>
        </div>
       
      </form>
      <div style={{
        position:"absolute",
        width:"70%",
        height:"100vh"
        }}>
          {isShowing ? (
            <>
              <FormModal onClick={handleClickToClose} />
            </>
          ) : null}
        </div>
    </>
  );
};

export default Form;
