import { useSelector } from "react-redux";
import { RootState } from "../_RTK/store/store";

// All states

export const GetUserInfo = () =>
  useSelector((state: RootState) => state.userInfo);
