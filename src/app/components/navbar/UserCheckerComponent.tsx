"use client";
import { SetStateAction, useState } from "react";
import Link from "next/link";

import { GetUserInfo } from "@/app/hooks/AppSelector";

const UserCheckerComponent = () => {
  const userInfo = GetUserInfo();
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);
  if (!userInfo.isLogin)
    return (
      <Link
        href={"/auth/login"}
        className="text-white btn-register-gradient px-4 py-2 text-[18px] duration-200"
      >
        Register
      </Link>
    );
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((p: boolean) => !p)}
        className="bg-sky-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] centered rounded-full text-white cursor-pointer"
      >
        {`${userInfo.data.name?.charAt(0).toUpperCase()}`}
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-[200px] min-h-[100px] bg-neutral-800 rounded-lg p-4 flex flex-col gap-2 text-white"></div>
      )}
    </div>
  );
};

export default UserCheckerComponent;
