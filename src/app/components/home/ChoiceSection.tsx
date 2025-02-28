"use client";
import { useGetMoviesListQuery } from "@/app/_RTK/slices/RTKQuery/RTKQuery";
import React from "react";
import ChoiceComponent from "./ChoiceComponent";

const ChoiceSection = () => {
  const { data, error, isLoading } = useGetMoviesListQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return <div>{data && <ChoiceComponent List={data} />}</div>;
};

export default ChoiceSection;
