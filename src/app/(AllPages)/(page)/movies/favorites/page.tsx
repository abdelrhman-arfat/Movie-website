import MoviesFavComponent from "@/app/components/movies/MoviesFavComponent";
import React from "react";

const page = () => {
  return (
    <div className="w-[90%] mx-auto bg-neutral-800">
      <h1 className="text-white text-xl sm:text-2xl px-2 py-1 my-4 mx-2">Favorites Movies :</h1>
      <MoviesFavComponent />
    </div>
  );
};

export default page;
