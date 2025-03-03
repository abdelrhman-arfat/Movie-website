import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Swal from "sweetalert2";
import { TUser } from "../_RTK/types/userType";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const handelAddTo_Fav_Watchlist = async ({
  userInfo,
  Router,
  url,
  setIsClicked,
}: {
  url: string;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: { isLogin: boolean; data: TUser };
  Router: AppRouterInstance;
}) => {
  if (!userInfo.isLogin) {
    if (!userInfo.isLogin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Are Not Logged In",
        footer:
          '<a href="https://www.themoviedb.org/signup">I don\'t have an account</a>',
      }).then(() => {
        Router.push("/auth/login");
      });
      return;
    }
  }

  const res = await axios.post(`${url}`);
  const data = await res.data;
  if (data.success) {
    Toast.fire({
      icon: "success",
      title: data.data.status_message,
    });
    setIsClicked((p: boolean) => !p);
  } else {
    Toast.fire({
      icon: "error",
      title: "Failed to add to favorite",
    });
  }
};
