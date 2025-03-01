"use client";
import { TMoviesList } from "@/app/_RTK/types/MoviesList";
import Link from "next/link";
import { memo } from "react";

const FilterComponent = ({
  List,
  path,
}: {
  List: TMoviesList;
  path: string;
}) => {
  return (
    <div
      id="dropdownInformation"
      className="z-10 max-w-[140px] divide-y max-h-[250px] overflow-y-scroll  divide-gray-100 rounded-lg shadow-sm w-44 bg-neutral-700"
    >
      <ul>
        {List?.data.genres.map((item: { name: string; id: number }) => (
          <li key={item.name + "-" + item.id}>
            <Link
              className="block px-4 py-2 text-wrap text-white duration-150 hover:bg-gray-100 dark:hover:bg-neutral-500 "
              href={`/${path}/list/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FilterComponent);
