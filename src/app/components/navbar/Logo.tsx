import Link from "next/link";
import React from "react";

export const Logo = ({ styles }: { styles?: string }) => {
  return (
    <Link className={`${styles}`} href={"/"}>
      Movies
    </Link>
  );
};
