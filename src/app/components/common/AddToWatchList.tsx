"use client";
import { CiBookmarkPlus } from "react-icons/ci";
import { useState } from "react";
import { GetUserInfo } from "@/app/hooks/AppSelector";
import { useRouter } from "next/navigation";
import { handelAddTo_Fav_Watchlist } from "@/app/func/HandelAddTo_fav_watchlist";

const AddToWatchList = ({ id }: { id: number }) => {
  const userInfo = GetUserInfo();
  const Router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const url = `/api/action/watchlist?user_id=${
    userInfo.data.id
  }&movie_id=${id}&action=${!isClicked}`;

  return (
    <div className="absolute top-2 left-2">
      <CiBookmarkPlus
        className={`${
          isClicked ? "bg-amber-600 text-gray-100" : "bg-neutral-300 text-black"
        }
        duration-200 rounded-full w-[32px] p-1 h-[30px] cursor-pointer
        `}
        onClick={() =>
          handelAddTo_Fav_Watchlist({ url, setIsClicked, Router, userInfo })
        }
      />
    </div>
  );
};

export { AddToWatchList };
