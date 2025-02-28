"use client";
import { useEffect, useState } from "react";
import SkeletonCard from "../common/SkeletonCard";
import SliderCards from "../common/SliderCards";
import { useGetPopularMoviesQuery } from "@/app/_RTK/slices/RTKQuery/RTKQuery";
import { MovieCard } from "../common/MovieCard";
import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";

export const SomePopular = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const movies = useGetPopularMoviesQuery(page);

  useEffect(() => {
    if (movies?.data) {
      setIsLoading(movies.isLoading);
    }
  }, [movies?.data, movies.isLoading]);

  return (
    <div className="w-[90%] mx-auto">
      <div className="perv-next-div w-full flex justify-between ">
        <button
          key={"Pervious-page"}
          onClick={() => {
            setPage((p: number) => {
              if (p > 1) {
                return p - 1;
              }
              return p;
            });
          }}
        >
          pervious
        </button>
        <button
          key={"next-page"}
          onClick={() => {
            setPage((p: number) => p + 1);
          }}
        >
          next
        </button>
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
