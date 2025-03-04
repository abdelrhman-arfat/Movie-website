"use client";

import SliderCards from "../common/SliderCards";
import { GetUserInfo } from "@/app/hooks/AppSelector";
import Swal from "sweetalert2";
import SkeletonCard from "../common/SkeletonCard";
import { useRouter } from "next/navigation";
import { MovieCard } from "../common/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";

type TD = {
  data?: {
    page: number;
    results: TPFilms[];
    total_pages: number;
    total_results: number;
  };
  success?: boolean;
};

const MoviesFavComponent = () => {
  const Router = useRouter();
  const [data, setData] = useState<TD>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userInfo = GetUserInfo();
  useEffect(() => {
    if (!userInfo.isLogin) {
      Swal.fire("You Should Login First").then(() => {
        Router.push("/auth/login");
      });
      return;
    }

    const myFN = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `/api/movies/fav?user_id=${userInfo.data.id}`
      );
      const data = await res.data;
      if (data) {
        setData(data);
        setIsLoading(false);
      }
    };
    myFN();
  }, [userInfo, Router]);

  if (isLoading) {
    return (
      <div>
        <SliderCards>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i + "-" + "skelton"} />
          ))}
        </SliderCards>
      </div>
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
          No movies in your Favorites
        </div>
      )}
    </div>
  );
};

export default MoviesFavComponent;
