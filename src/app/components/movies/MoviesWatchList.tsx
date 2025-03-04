"use client";
import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";

import { GetUserInfo } from "@/app/hooks/AppSelector";
import axios from "axios";
import { useEffect, useState } from "react";
import SliderCards from "../common/SliderCards";
import { MovieCard } from "../common/MovieCard";
import SkeletonCard from "../common/SkeletonCard";

const MoviesWatchList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<{
    success?: boolean;
    data?: {
      page: number;
      results: TPFilms[];
      total_pages: number;
      total_results: number;
    };
  }>({});
  const userInfo = GetUserInfo();
  useEffect(() => {
    const myFN = async () => {
      const response = await axios.get(
        `/api/movies/watchlist?user_id=${userInfo.data.id}`
      );
      const data = await response.data;
      if (data.success) {
        setData(data);
        setIsLoading(false);
      }
    };
    myFN();
  }, [userInfo.data.id]);
  if (isLoading) {
    return (
      <SliderCards>
        {Array.from({ length: 4 }).map((_, i: number) => {
          return <SkeletonCard key={i + "-watch-list-skelton"} />;
        })}
      </SliderCards>
    );
  }
  return (
    <div>
      {data?.data?.results.length ? (
        <SliderCards>
          {data?.data?.results.map((movie: TPFilms, index: number) => (
            <MovieCard movie={movie} key={movie.id + "-movie-" + index} />
          ))}
        </SliderCards>
      ) : (
        <div className="w-full h-[300px] text-2xl text-white flex items-center justify-center text-center">
          No movies in your watchlist
        </div>
      )}
    </div>
  );
};

export default MoviesWatchList;
