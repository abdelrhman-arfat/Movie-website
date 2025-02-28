"use client";
import { GetUserInfo } from "@/app/hooks/AppSelector";
import Link from "next/link";
const GetUserActions = () => {
  const userInfo = GetUserInfo();
  if (!userInfo.isLogin) {
    return (
      <div className="w-[90%] h-screen flex items-center justify-center mx-auto text-white  text-3xl">
        You Should Login First{" "}
        <Link
          className="bg-sky-400 ml-3 rounded-xl py-2 px-2 text-white text-xl"
          href={"/auth/login"}
        >
          Login
        </Link>
      </div>
    );
  }
  return (
    <div className="w-[90%] mx-auto bg-red-300">
      <h1>Name: {userInfo?.data?.name || "You Should LoginFirst"}</h1>
    </div>
  );
};

export default GetUserActions;
