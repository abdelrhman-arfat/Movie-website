"use client";
import { SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { TLinks } from "./Navbar";
import { MdMenu } from "react-icons/md";

const PhonesScreenNavComponent = ({ links }: { links: TLinks[] }) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);
  return (
    <div className="flex sm:hidden ">
      <button name="open-menu" onClick={() => setIsOpen((p: boolean) => !p)}>
        <MdMenu className="text-white text-4xl cursor-pointer" />
      </button>
      {isOpen && (
        <div className="fixed top-20 left-0 w-full h-screen  bg-black opacity-75 z-50">
          <div className="flex flex-col gap-7 py-8 px-8 mt-5 items-center">
            {links.map((link: TLinks, index: number) => (
              <Link
                onClick={() => setIsOpen(false)}
                style={
                  path === link.href
                    ? { color: "#E52020", scale: 1.2 }
                    : { scale: 1 }
                }
                key={link + "--" + index}
                href={link.href}
                className="text-white font-semibold text-xl"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhonesScreenNavComponent;
