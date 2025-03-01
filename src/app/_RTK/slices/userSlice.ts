import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/userType";

const initialState: { data: TUser; isLogin: boolean } = {
  isLogin: false,
  data: {},
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // when login
    addUserInfo: (state, action) => {
      state = { isLogin: true, data: action.payload };
      return state;
    },
    // when logout
    removeUserInfo: (state) => {
      state = { isLogin: false, data: {} };
      return state;
    },
  },
});

export const { addUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
