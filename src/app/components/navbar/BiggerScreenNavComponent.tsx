import React from "react";
import NavLink from "./NavLink";
import { TLinks } from "./Navbar";
const BiggerScreenNavComponent = ({ links }: { links: TLinks[] }) => {
  return (
    <div className="hidden sm:flex gap-12 items-center ">
      <ul className="flex gap-7">
        {links.map((link: TLinks, index: number) => (
          <NavLink
            link={link}
            key={link.name + "-" + link.href + "-" + index}
          />
        ))}
      </ul>
    </div>
  );
};

export default BiggerScreenNavComponent;
