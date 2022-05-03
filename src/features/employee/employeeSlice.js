import { createSlice } from "@reduxjs/toolkit";

// saves the list of registered employees from the form in the store

const initialState = [];

const newEmployeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addNewEmployee: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addNewEmployee } = newEmployeeSlice.actions;
export default newEmployeeSlice.reducer;
