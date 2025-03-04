import { lazy, Suspense } from "react";
const MoviesFN = lazy(() => import("@/app/components/movies/MoviesWatchList"));

const page = async () => {
  return (
    <div className="w-[90%] min-h-[300px] mx-auto bg-neutral-800">
      <Suspense
        fallback={<div className="text-center text-gray-400">Loading...</div>}
      >
        <MoviesFN />
      </Suspense>
    </div>
  );
};

export default page;
