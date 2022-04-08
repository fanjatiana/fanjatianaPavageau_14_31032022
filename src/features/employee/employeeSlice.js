import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

const newEmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addNewEmployee: (state = initialState, action) => {
      return {
        ...state,
        employee:[...state.employee, action.data]
      };
    },
  },
});

export const { addNewEmployee } = newEmployeeSlice.actions;
export default newEmployeeSlice.reducer;
