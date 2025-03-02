import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";
import { MovieCard } from "@/app/components/common/MovieCard";
import SliderCards from "@/app/components/common/SliderCards";
import { ACCESS_TOKEN, API_URL, IMAGE_URL } from "@/app/constant/api_accts";
import Image from "next/image";
import React from "react";
interface PageProps {
  params: Promise<{ list_id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { list_id } = await params;

  let listData: {
    backdrop_path?: string | null;
    id?: number;
    name?: string;
    overview?: string | null;
    poster_path?: string | null;
    release_date?: string | null;
    title?: string | null;
    description?: string | null;
    items?: TPFilms[];
  } = {};

  const fetchList = async () => {
    try {
      const res = await fetch(`${API_URL}/list/${list_id}?language=en-US`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      listData = await res.json();
      console.log(listData);
    } catch (error) {
      console.error("Error fetching movie list:", error);
      return (
        <div className="text-center text-red-500">Failed to load data.</div>
      );
    }
  };
  fetchList();
  return (
    <div className="w-full bg-neutral-800 py-6">
      <div className="mx-auto w-[90%]">
        <div className="relative h-[500px] shadow-md  rounded-md overflow-hidden">
          {listData?.poster_path ? (
            <Image
              key={listData.backdrop_path}
              src={`${IMAGE_URL}${listData.poster_path}`}
              fill
              className="object-cover"
              alt={listData.name || "imge"}
            />
          ) : (
            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
              <div className="loader" />
              <p className="text-neutral-200">No Image in or not found</p>
            </div>
          )}
        </div>

        <div className="w-full my-3">
          <h1 className="text-2xl text-neutral-100">{listData.name}</h1>
          <p className="text-[16px] my-2 text-neutral-300">
            {listData.description}
          </p>
        </div>

        <hr className="my-2" />

        <div>
          <h1 className="text-2xl mt-3 text-white bg-gradient-to-r from-red-600 to-rose-500 w-fit px-2 py-1 rounded-md">
            Movies
          </h1>
        </div>

        <SliderCards>
          {listData?.items?.map((movie: TPFilms, index: number) => (
            <MovieCard key={`${index}-${movie.id}-movie`} movie={movie} />
          ))}
        </SliderCards>
      </div>
    </div>
  );
};

export default Page;
