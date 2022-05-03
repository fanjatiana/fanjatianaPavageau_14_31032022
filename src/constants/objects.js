// form control + error messages
export const registerOptions = {
  states: { required: "Please select a state" },
  department: { required: "Please select a department" },
  firstName: {
    required: "First name is required",
    maxLength: {
      value: 30,
      message: "First name must have at least 30 characters",
    },
    pattern: {
      value: /^[A-Za-z ,.'-]+$/i,
      message:
        "First name must not have numbers,only special characters allowed: ' , . -",
    },
  },

  lastName: {
    required: "Last name is required",
    maxLength: {
      value: 30,
      message: "Last name must have at least 30 characters",
    },
    pattern: {
      value: /^[A-Za-z ,.'-]+$/i,
      message:
        "Last name must not have numbers,only special characters allowed: ' , . -",
    },
  },

  dateofBirth: {
    required: "Date of birth is required",
    min: {
      value: "1900-01-01",
      message: "Bad date",
    },
    max: {
      value: "2009-01-01",
      message: "Bad date",
    },
  },

  startDate: {
    required: "Start date is required",
    min: {
      value: "1950-01-01",
      message: "Bad date",
    },
  },

  street: {
    required: "Street is required",
    pattern: {
      value: "([0-9a-zA-Z,. ]*) ?([0-9]{5}) ?([a-zA-Z]*)",
    },
    maxLength: {
      value: 30,
      message: "Street must have at least 30 characters",
    },
  },
  city: {
    required: "City is required",
    pattern: {
      value: /^[A-Za-z ,.'-]+$/i,
      message:
        "City must not have numbers,only special characters allowed: ' , . -",
    },
    maxLength: {
      value: 30,
      message: "City must have at least 30 characters",
    },
  },

  zipCode: {
    required: "Zip code is required",
    pattern: {
      value: /^[0-9]{5}(?:(-| )[0-9]{4})?$/,
      message:
        "No string, no special characters , write 5 numbers like this : NNNNN",
    },
    max: {
      value: 99950,
      message: "Bad zip code",
    },
  },
};
