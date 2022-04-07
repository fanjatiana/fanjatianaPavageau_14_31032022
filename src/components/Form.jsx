import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Form.css";
import SelectDepartment from "./SelectDepartment";
import SelectUsStates from "./SelectUsStates";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  //const handleError = (errors) => {};

  const registerOptions = {
    firstname: {
      required: "first name is required",
      maxLength: {
        value: 30,
        message: "firstname must have at least 30 characters",
      },
      pattern: {
        value: /^[A-Za-z ,.'-]+$/i,
        message: "firstname must no have number",
      },
    },

    lastname: {
      required: "last name is required",
      maxLength: {
        value: 30,
        message: "lastname must have at least 30 characters",
      },
      pattern: {
        value: /^[A-Za-z ,.'-]+$/i,
        message: "lastname must no have number",
      },
    },

    dateofbirth: {
      required: "date of birth is required",
      min: {
        value: "1940-01-01",
        message: "bad date of birth",
      },
      max: {
        value: "2004-01-01",
        message: "bad date of birth",
      },
    },

    startdate: {
      required: "start date is required",
      min: {
        value: "1940-01-01",
        message: "bad date",
      },
    },

    street: {
      required: "street is required",
      pattern: {
        value: "([0-9a-zA-Z,. ]*) ?([0-9]{5}) ?([a-zA-Z]*)",
        message: "street no have caracteres speciaux",
      },
    },
    city: { required: "city is required" },

    zipcode: {
      required: "zipcode is required",
      pattern: {
        value: /^[0-9]{5}(?:(-| )[0-9]{4})?$/,
        message: "write 5 numbers like this : NNNNN",
      },
      max: {
        value: 99950,
        message: "bad zip code",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, /*handleError*/)}>
      <div>
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

      <div>
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

      <div>
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
      <div>
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

      <div>
        <fieldset className="address">
          <legend>Address</legend>
          <div>
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

          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              {...register("city", registerOptions.city)}
            />
            <p className="text-danger">{errors?.city && errors.city.message}</p>
          </div>

          <div>
            <label htmlFor="state">State</label>
            <SelectUsStates />
          </div>

          <div>
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

      <div>
        <label for="department">Department</label>
        <SelectDepartment />
      </div>

      <div>
        <button>Submit</button>
      </div>

    </form>
  );
};

export default Form;
