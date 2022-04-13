import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const newEmployeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addNewEmployee: (state, action) => {
      return [...state,action.payload]
      
    },
  },
});

export const { addNewEmployee } = newEmployeeSlice.actions;
export default newEmployeeSlice.reducer;
