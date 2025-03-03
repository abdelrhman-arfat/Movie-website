import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";
import { IMAGE_URL } from "@/app/constant/api_accts";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { AddToWatchList } from "./AddToWatchList";
import { AddToFav } from "./AddToFav";

const MovieCard = ({ movie }: { movie: TPFilms }) => {
  return (
    <div className="rounded relative max-w-[300px] overflow-hidden min-w-[250px] sm:min-w-[300px] shadow-lg">
      <AddToWatchList id={movie.id} />
      <AddToFav id={movie.id} />
      <Image
        priority
        className=" bg-gray-400 h-[445px] sm:h-[400px]"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        width={300}
        height={445}
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt={movie.title || "movie image"}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1 text-gray-200 ">
          {movie.title}
        </div>
        <p className="text-gray-400 text-wrap min-h-[75px] line-clamp-3 text-base">
          {movie.overview}
        </p>
      </div>
      <div className="flex w-full justify-between px-6 pt-4 pb-2">
        <p className="bg-gray-200 rounded-full px-2 py-1 text-[10px] sm:text-sm font-semibold text-gray-700 mr-2 mb-2">
          {movie?.release_date || movie?.first_air_date}
        </p>
        <p className="bg-gray-200 rounded-full px-3 py-1 text-[10px]  sm:text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          {movie.adult ? "+18 (Mature Content)" : "Suitable for Everyone"}
        </p>
      </div>
      <Link
        className="text-center hover:tracking-wider w-full mt-2 cursor-pointer text-white bg-gradient-to-r from-purple-600 to-rose-600 px-4 h-[40px] inline-block py-2"
        href={`/movies/${movie.id}`}
      >
        Details
      </Link>
    </div>
  );
};

export { MovieCard };
