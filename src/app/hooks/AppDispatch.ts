"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../_RTK/store/store";

export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};
