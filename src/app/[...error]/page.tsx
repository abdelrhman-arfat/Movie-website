import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-screen h-screen justify-center">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">404 | Page not found</h1>
      </div>
      <div>
        <Link
          replace
          href={"/"}
          className="px-4 py-2  font-semibold text-sm sm:text-xl bg-sky-600 duration-200 rounded-xl text-white"
        >
          Go pack to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
