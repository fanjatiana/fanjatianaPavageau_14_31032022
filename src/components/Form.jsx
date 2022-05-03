import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-nmp-modal";
import Select from "react-select";
import { useAppDispatch } from "../app/hooks";
import { departments, states } from "../constants/arrays";
import { registerOptions } from "../constants/objects";
import { colourStyles, myStylesModal } from "../constants/styles_custom";
import { addNewEmployee } from "../features/employee/employeeSlice";
import "../styles/Form.css";

// employee creation form
const Form = () => {
  const dispatch = useAppDispatch();

  // form validation management
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const handleError = (errors) => console.log(errors);

  /* function allowing data to be sent to the store 
   and display of the successful send message */
  const handleRegistration = (data) => {
    dispatch(
      addNewEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateofBirth,
        startDate: data.startDate,
        department: data.department,
        street: data.street,
        city: data.city,
        states: data.states,
        zipCode: data.zipCode,
      })
    );
    setIsShowing(true);
  };

  // function that closes the modal
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
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              {...register("firstName", registerOptions.firstName)}
            />
            <p className="text-danger">
              {errors?.firstName && errors.firstName.message}
            </p>
          </div>
          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              {...register("lastName", registerOptions.lastName)}
            />
            <p className="text-danger">
              {errors?.lastName && errors.lastName.message}
            </p>
          </div>
          <div className="input">
            <label htmlFor="dateofBirth">Date of Birth</label>
            <input
              id="dateofBirth"
              type="date"
              name="dateofBirth"
              {...register("dateofBirth", registerOptions.dateofBirth)}
            />
            <p className="text-danger">
              {errors?.dateofBirth && errors.dateofBirth.message}
            </p>
          </div>
          <div className="input">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              {...register("startDate", registerOptions.startDate)}
            />
            <p className="text-danger">
              {errors?.startDate && errors.startDate.message}
            </p>
          </div>
          <div className="field_address">
            <fieldset className="address">
              <legend>Address</legend>
              <div className="input">
                <label htmlFor="street">Street</label>
                <input
                  id="street"
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
                  id="city"
                  type="text"
                  name="city"
                  {...register("city", registerOptions.city)}
                />
                <p className="text-danger">
                  {errors?.city && errors.city.message}
                </p>
              </div>
              <div className="select">
                <label htmlFor="react-select-3-input">States</label>
                <Controller
                  name="states"
                  control={control}
                  defaultValue=""
                  rules={registerOptions.states}
                  render={({ field }) => (
                    <Select
                      options={states}
                      {...field}
                      label="react-select-3-input"
                      styles={colourStyles}
                    />
                  )}
                />
                <small className="text-danger">
                  {errors?.states && errors.states.message}
                </small>
              </div>
              <div className="input">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  {...register("zipCode", registerOptions.zipCode)}
                />
                <p className="text-danger">
                  {errors?.zipCode && errors.zipCode.message}
                </p>
              </div>
            </fieldset>
          </div>
          <div className="select_department">
            <label htmlFor="react-select-5-input">Department</label>
            <Controller
              name="department"
              control={control}
              defaultValue=""
              rules={registerOptions.department}
              render={({ field }) => (
                <Select
                  options={departments}
                  {...field}
                  label="react-select-5-input"
                  styles={colourStyles}
                />
              )}
            />
            <small className="text-danger">
              {errors?.department && errors.department.message}
            </small>
          </div>
        </div>
        <div className="btn-submit">
          <button aria-label='Submit'>Submit</button>
        </div>
      </form>
      {isShowing ? (
        <>
          <Modal
            modalStyles={myStylesModal}
            onClick={handleClickToClose}
            messageText="Employee created !"
          />
        </>
      ) : null}
    </>
  );
};

export default Form;
