import Link from "next/link";
import React from "react";
import UserCheckerComponent from "./UserCheckerComponent";
import { Logo } from "./Logo";

const HeaderOfProfilePage = () => {
  return (
    <header className="w-full h-[90px]">
      <nav className="w-[90%] mx-auto h-full flex items-center justify-between">
        <div className="w-1/2 text-white">
          <Logo styles="text-2xl md:text-3xl uppercase font-semibold text-white hover:text-gray-300 duration-200" />
        </div>
        <div className="flex gap-4 sm:gap-8 items-center">
          <Link
            className="text-[18px] capitalize hover:text-gray-200 duration-200 text-white"
            href={"/"}
          >
            Home
          </Link>
          <UserCheckerComponent />
        </div>
      </nav>
    </header>
  );
};

export default HeaderOfProfilePage;
