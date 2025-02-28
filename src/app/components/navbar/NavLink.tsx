"use client";
import Link from "next/link";
import React from "react";
import { TLinks } from "./Navbar";
import { usePathname } from "next/navigation";
const NavLink = ({ link }: { link: TLinks }) => {
  const path = usePathname();
  return (
    <li className="relative">
      <div
        className={`absolute ${
          path === link.href && " h-[2px] w-full"
        } duration-300 top-8 bg-red-500`}
      ></div>
      <Link
        className={`${
          path === link.href
            ? "text-red-500 hover:text-red-600"
            : "text-white hover:text-gray-200"
        } capitalize  duration-200 text-[16px]`}
        href={link.href}
      >
        {link.name}
      </Link>
    </li>
  );
};

export default NavLink;
