"use client";
import { SetStateAction, useCallback, useState } from "react";
import FilterComponent from "../common/FilterComponent";
import { TMoviesList } from "@/app/_RTK/types/MoviesList";

const ChoiceComponent = ({
  btnWord,
  List,
  path = "movies",
}: {
  btnWord: string;
  List: TMoviesList;
  path?: string;
}) => {
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);
  const Filter = useCallback(
    () => <FilterComponent path={path} List={List} />,
    [List ,path]
  );

  return (
    <div className="min-h-[300px] my-2 py-4">
      <div>
        <div className="">
          <button
            onClick={() => setIsOpen((p: boolean) => !p)}
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="text-white bg-rose-600 hover:bg-red-400 duration-200 outline-none  font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center "
            type="button"
          >
            {btnWord}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="mt-2" style={{ display: isOpen ? "block" : "none" }}>
            {Filter()}
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ChoiceComponent;
