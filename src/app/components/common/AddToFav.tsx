"use client";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { GetUserInfo } from "@/app/hooks/AppSelector";

import { useRouter } from "next/navigation";
import { handelAddTo_Fav_Watchlist } from "@/app/func/HandelAddTo_fav_watchlist";

const AddToFav = ({ id }: { id: number }) => {
  const userInfo = GetUserInfo();
  const Router = useRouter();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const url = `/api/action/fav?user_id=${
    userInfo.data.id
  }&movie_id=${id}&action=${!isClicked}`;

  return (
    <div className="absolute top-2 right-2">
      <FaHeart
        className={`${
          isClicked
            ? "bg-red-600 text-gray-100"
            : "bg-gray-200  text-neutral-700"
        }
        duration-200 text-[12px] rounded-full w-[32px] p-1.5 h-[30px] cursor-pointer
        `}
        onClick={() => {
          handelAddTo_Fav_Watchlist({ url, setIsClicked, Router, userInfo });
        }}
      />
    </div>
  );
};

export { AddToFav };
