"use client";
import React, { useCallback, useEffect, useState } from "react";
import SliderCards from "../common/SliderCards";
import { MovieCard } from "../common/MovieCard";
import { TPFilms } from "@/app/_RTK/types/PopularFilmsType";
import ChangeThePage from "../common/ChangeThePage";
import axios from "axios";
import SkeletonCard from "../common/SkeletonCard";

type TTvList = {
  success: boolean;
  data: {
    page?: number;
    results?: TPFilms[];
    total_pages?: number;
    total_results?: number;
  };
};

const TvListSection = ({ list_id }: { list_id: string }) => {
  const [page, setPage] = useState<number>(1);
  const [listData, setListData] = useState<TTvList>({
    success: false,
    data: {},
  });
  const ChangePage = useCallback(() => {
    return <ChangeThePage setPage={setPage} />;
  }, []);

  useEffect(() => {
    if (!list_id) return;

    const fetchList = async () => {
      try {
        const res = await axios.get(
          `/api/tv/listId?list_id=${list_id}&page=${page}`
        );
        setListData(res.data);
      } catch (error) {
        console.error("Failed to fetch list data", error);
      }
    };

    fetchList();
  }, [list_id, page]);

  return (
    <div>
      <div className="w-full my-3"></div>

      <hr className="my-2" />

      <div>
        <h1 className="text-2xl mt-3 text-white bg-gradient-to-r from-red-600 to-rose-500 w-fit px-2 py-1 rounded-md">
          TV List
        </h1>
      </div>
      <div className="mt-5">{ChangePage()}</div>
      {listData?.data?.results ? (
        <SliderCards>
          {listData?.data?.results.map((movie: TPFilms, index: number) => (
            <MovieCard key={`${index}-${movie.id}-movie`} movie={movie} />
          ))}
        </SliderCards>
      ) : (
        <div>
          <SliderCards>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonCard key={i + "-" + "skelton"} />
            ))}
          </SliderCards>
        </div>
      )}
    </div>
  );
};

export default TvListSection;
