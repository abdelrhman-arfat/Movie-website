import React from "react";
import { Logo } from "./Logo";
import BiggerScreenNavComponent from "./BiggerScreenNavComponent";
import PhonesScreenNavComponent from "./PhonesScreenNavComponent";
import UserCheckerComponent from "./UserCheckerComponent";
export type TLinks = {
  name: string;
  href: string;
};
const Navbar = () => {
  const links: TLinks[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Movies",
      href: "/movies",
    },
    {
      name: "about",
      href: "/about",
    },
  ];
  return (
    <header className="w-full h-[90px]">
      <nav className="w-[90%] mx-auto h-full font-semibold flex  items-center justify-between">
        <div>
          <Logo styles="text-2xl md:text-3xl uppercase font-semibold text-white hover:text-gray-300 duration-200" />
        </div>
        {/* biggerScreens */}
        <div className="flex items-center gap-4 sm:gap-8">
          <BiggerScreenNavComponent links={links} />
          <PhonesScreenNavComponent links={links} />
          <UserCheckerComponent />
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
