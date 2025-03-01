import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageSection = () => {
  return (
    <div className="w-full h-[450px] sm:h-[500px] md:h-[550px] my-3">
      <div className="mx-auto  overflow-hidden relative group w-[90%] h-full">
        <Image
          src={"/cinema.jpg"}
          className=" rounded-xl"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          fill
          sizes="100%"
          alt={"cinema"}
        ></Image>
        <div className="w-full rounded-xl flex justify-center items-center h-full absolute group-hover:opacity-100 opacity-100 sm:opacity-0 bg-black/70 duration-300">
          <Link
            href={"/movies"}
            className="duration-300 sm:text-2xl text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 text-xl cursor-pointer  rounded-md"
          >
            All Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
