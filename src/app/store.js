import { configureStore } from '@reduxjs/toolkit';
import newEmployeeReducer from '../features/employee/employeeSlice';

export const store = configureStore({
  reducer: {
    employee : newEmployeeReducer,
  },
});

