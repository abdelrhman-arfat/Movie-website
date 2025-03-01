"use client";
import { SetStateAction, useState } from "react";
import Link from "next/link";

import { GetUserInfo } from "@/app/hooks/AppSelector";
import Image from "next/image";
import { useAppDispatch } from "@/app/hooks/AppDispatch";
import { removeUserInfo } from "@/app/_RTK/slices/userSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { CgClose } from "react-icons/cg";

const UserCheckerComponent = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-red-600 text-white",
      cancelButton: "bg-neutral-500",
    },
    buttonsStyling: true,
  });
  const userInfo = GetUserInfo();
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);
  const dispatch = useAppDispatch();
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
      <Image
        onClick={() => setIsOpen((p: boolean) => !p)}
        width={40}
        height={40}
        priority
        className="rounded-full cursor-pointer"
        src={`https://www.gravatar.com/avatar/237b0d4219396304ac37013397e35dba?s=200&d=identicon`}
        alt={(userInfo.data.name as string) || "username"}
      ></Image>

      {isOpen && (
        <div className="absolute top-16 z-50 right-0 w-[250px] sm:w-[300px] min-h-[100px] bg-neutral-900 rounded-lg p-4 flex flex-col gap-2 text-white">
          <button onClick={() => setIsOpen((p: boolean) => !p)}>
            <CgClose className="right-3 top-3 bg-red-500 w-[25px] h-[25px] rounded-full absolute " />
          </button>
          <h1 className="text-[16px]">Name: {userInfo.data.name}</h1>
          <h1 className="text-[16px]">UserName: {userInfo.data.username}</h1>
          <h1 className="text-[16px]">
            Adult: {userInfo.data.include_adult ? "Yes" : "No"}
          </h1>
          <div className="flex gap-1">
            <p>{userInfo.data.iso_3166_1}</p>|<p>{userInfo.data.iso_639_1}</p>
          </div>
          <div>
            <button
              onClick={() => {
                swalWithBootstrapButtons
                  .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true,
                  })
                  .then((result) => {
                    if (result.isConfirmed) {
                      swalWithBootstrapButtons.fire({
                        title: "Logout!",
                        text: "Now You are logged out.",
                        icon: "success",
                      });

                      dispatch(removeUserInfo());
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Logout cancelled!",
                        icon: "error",
                      });
                    }
                  });
              }}
              className="px-3 py-1.5 bg-red-600 w-full mt-2 hover:bg-red-500 duration-200 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCheckerComponent;
