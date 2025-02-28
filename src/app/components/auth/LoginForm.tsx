"use client";
import { addUserInfo } from "@/app/_RTK/slices/userSlice";
import { useAppDispatch } from "@/app/hooks/AppDispatch";
import { GetUserInfo } from "@/app/hooks/AppSelector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";

const LoginForm = () => {
  const { isLogin, data } = GetUserInfo();
  const router = useRouter();
  useEffect(() => {
    if (isLogin) {
      let isRedirecting = false;
      // ignore check after login has been done.
      if (!isRedirecting) {
        isRedirecting = true;
        (async () => {
          await Swal.fire({
            title: "Login successful",
            text: `You have successfully logged in ${
              data.name ? data.name : data.username
            } `,
            icon: "success",
            timer: 3000,
          });
          router.replace("/");
        })();
      }
    }
  }, [isLogin, data, router]);
  const [loading, setLoading] = useState("no");
  const dispatch = useAppDispatch();
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading("pending");
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // make local server order to get user information securely
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (res.ok) {
        setLoading("no");
        dispatch(addUserInfo(result.data));
      } else {
        setLoading("no");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${result.message} , try again`,
        });
      }
    } catch {
      setLoading("no");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! , try again",
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-neutral-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          Login
        </h2>
        {loading === "pending" && (
          <div className="w-screen h-screen absolute left-0 top-0 bg-black/40 flex items-center justify-center">
            <FadeLoader color="white" />
          </div>
        )}

        <form onSubmit={(e) => handleLoginSubmit(e)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-50 mb-1">
              Username
            </label>
            <input
              name="username"
              required
              autoFocus={true}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="user name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-50 mb-1">
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="https://www.themoviedb.org/reset-password"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>

          <input
            value="Login"
            type="submit"
            className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          />
        </form>

        <div
          className="mt-6 cursor-pointer  text-center text-sm text-gray-400"
          onClick={() => {
            Swal.fire({
              title: "You should sign in the main website",
              text: "Sign in the main website and login in this page again",
              icon: "question",
            }).then(() => {
              window.open("https://www.themoviedb.org/signup", "_blank");
            });
          }}
        >
          Don&apos;t have an account?
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
