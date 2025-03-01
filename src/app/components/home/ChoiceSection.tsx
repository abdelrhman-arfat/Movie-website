"use client";
import {
  useGetMoviesListQuery,
  useGetTvMoviesQuery,
} from "@/app/_RTK/slices/RTKQuery/RTKQuery";
import React from "react";
import ChoiceComponent from "./ChoiceComponent";
import { PropagateLoader } from "react-spinners";

const ChoiceSection = () => {
  const { data, error, isLoading } = useGetMoviesListQuery();
  const {
    data: TvData,
    error: TvError,
    isLoading: TvIsLoading,
  } = useGetTvMoviesQuery();

  if (isLoading || TvIsLoading)
    return (
      <div className="w-[90%] flex items-center justify-center mx-auto my-5 ">
        <PropagateLoader color="white" />
      </div>
    );
  if (error || TvError)
    return (
      <div className="text-white flex items-center justify-center text-2xl">
        Error Try Again
      </div>
    );

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-xl text-rose-500 sm:text-3xl font-bold">
        Choice & Filter
      </h1>
      <div className="flex gap-6 ">
        {data && <ChoiceComponent btnWord="Movies List" List={data} />}
        {TvData && (
          <ChoiceComponent btnWord="Tv List" path="tv" List={TvData} />
        )}
      </div>
    </div>
  );
};

export default ChoiceSection;
