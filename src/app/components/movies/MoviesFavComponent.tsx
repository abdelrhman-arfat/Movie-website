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
    <SliderCards>
      {data?.data?.results?.map((movie, index) => (
        <MovieCard key={index + "-" + "movie-fav"} movie={movie} />
      ))}
    </SliderCards>
  );
};

export default MoviesFavComponent;
