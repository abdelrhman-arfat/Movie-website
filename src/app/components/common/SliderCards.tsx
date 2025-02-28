"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const SliderCards = ({ children }: { children: React.ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div>
      <div className="relative">
        <div>
          <div className="absolute cursor-pointer z-40 hover:scale-110 duration-200 top-1/2 left-1  bg-gradient-to-r from-purple-400  to-rose-400 p-1 -translate-y-1/2 rounded-full">
            <FaArrowAltCircleLeft
              onClick={() => {
                if (scrollContainerRef?.current) {
                  scrollContainerRef.current.scrollBy({
                    left: -900,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-4xl  text-neutral-100  "
            />
          </div>
          <div className="absolute cursor-pointer z-40 hover:scale-110 duration-200 top-1/2 right-1 bg-gradient-to-r from-purple-400  to-rose-400 p-1 -translate-y-1/2 rounded-full">
            <FaArrowAltCircleRight
              onClick={() => {
                if (scrollContainerRef?.current) {
                  scrollContainerRef.current.scrollBy({
                    left: +900,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-4xl  text-neutral-100  "
            />
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className=" relative w-full overflow-x-auto whitespace-nowrap flex gap-4 p-2"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
