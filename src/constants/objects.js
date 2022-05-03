// form control + error messages
export const registerOptions = {
  states: { required: "Please select a state" },
  department: { required: "Please select a department" },
  firstname: {
    required: "first name is required",
    maxLength: {
      value: 30,
      message: "firstname must have at least 30 characters",
    },
    pattern: {
      value: /^[A-Za-z ,.'-]+$/i,
      message: "firstname must not have number",
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
      message: "lastname must not have number",
    },
  },

  dateofbirth: {
    required: "date of birth is required",
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
      message: "street not have special characters",
    },
  },
  city: { required: "city is required" },

  zipcode: {
    required: "zip code is required",
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


