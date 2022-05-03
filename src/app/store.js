import { configureStore } from "@reduxjs/toolkit";
import newEmployeeReducer from "../features/employee/employeeSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

/* key : which will be displayed in the localstorage
storage : where the data will be stored */
const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  employees: newEmployeeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
