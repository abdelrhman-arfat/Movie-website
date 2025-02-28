import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "../slices/userSlice";
import { filmsApi } from "../slices/RTKQuery/RTKQuery";

export const allReducers = combineReducers({
  userInfo,
  [filmsApi.reducerPath]: filmsApi.reducer,
});
