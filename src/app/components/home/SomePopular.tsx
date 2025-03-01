"use client";
import { useCallback, useEffect, useState } from "react";
import SkeletonCard from "../common/SkeletonCard";
import SliderCards from "../common/SliderCards";
import { useGetPopularMoviesQuery } from "@/app/_RTK/slices/RTKQuery/RTKQuery";
import { MovieCard } from "../common/MovieCard";
import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";
import ChangeThePage from "../common/ChangeThePage";

export const SomePopular = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const movies = useGetPopularMoviesQuery(page);
  const ChangePage = useCallback(() => {
    return <ChangeThePage setPage={setPage} />;
  }, []);
  useEffect(() => {
    if (movies?.data) {
      setIsLoading(movies.isLoading);
    }
  }, [movies?.data, movies.isLoading]);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-white text-xl sm:text-2xl my-4">Popular Movies:</h1>
      <div className="perv-next-div w-full flex justify-between ">
        {ChangePage()}
      </div>
      {isLoading ? (
        <SliderCards>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i + "skelton"} />
          ))}
        </SliderCards>
      ) : (
        <SliderCards>
          {movies.data?.data.results?.map((movie: TPFilms) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SliderCards>
      )}
    </div>
  );
};
