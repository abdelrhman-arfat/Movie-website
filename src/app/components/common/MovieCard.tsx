import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";
import { IMAGE_URL } from "@/app/constant/api_accts";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const MovieCard = ({ movie }: { movie: TPFilms }) => {
  return (
    <div className="rounded overflow-hidden min-w-[250px] sm:min-w-[300px] shadow-lg">
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
          {movie.release_date}
        </p>
        <p className="bg-gray-200 rounded-full px-3 py-1 text-[10px]  sm:text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          {movie.adult ? "+18 (Mature Content)" : "Suitable for Everyone"}
        </p>
      </div>
      <div className="text-center w-[100%] mt-2 cursor-pointer text-white bg-gradient-to-r from-purple-600 to-rose-600 group py-2">
        {/*  href={`/movie/${movie.id}`} */}
        <Link href={"#"} className="group-hover:tracking-wider duration-200">
          Details
        </Link>
      </div>
    </div>
  );
};

export { MovieCard };
