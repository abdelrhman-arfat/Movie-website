import React from "react";

const SkeletonCard = () => {
  return (
    <div className="rounded overflow-hidden min-w-[250px] bg-gray-300 animate-pulse sm:min-w-[300px] shadow-lg">
      <div className=" animate-pulse w-full h-[445px] sm:h-[380px] bg-gray-500"></div>
      <div className="px-6 py-4 animate-pulse  text-gray-500 ">
        <div className="animate-pulse bg-gray-500 h-[20px] w-[100px]"></div>
        <p className="w-full h-[30px] bg-gray-500 animate-pulse mt-4"></p>
      </div>
      <div className="flex w-full justify-between px-6 pt-4 pb-2">
        <p className="animate-pulse h-[30px] w-1/2 bg-gray-500 rounded-full px-2 py-1 text-[10px] sm:text-sm font-semibold text-gray-700 mr-2 mb-2"></p>
        <p className="animate-pulse h-[30px] w-1/2 bg-gray-500 rounded-full px-3 py-1 text-[8px] sm:text-[12px] font-semibold text-gray-700 mr-2 mb-2"></p>
      </div>
      <div className="animate-pulse h-[40px] text-center w-[100%] mt-2 cursor-pointer text-white bg-gray-500 py-2">
        Details
      </div>
    </div>
  );
};

export default SkeletonCard;
