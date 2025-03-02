import { TMovie } from "@/app/_RTK/types/TMovie";
import { WarningMessage } from "@/app/components/common/WorrningMessage";
import { ACCESS_TOKEN, API_URL, IMAGE_URL } from "@/app/constant/api_accts";
import Image from "next/image";
import Link from "next/link";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FaHandPointRight } from "react-icons/fa";
interface PageProps {
  params: Promise<{ movie_id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { movie_id } = await params;
  const res = await fetch(`${API_URL}/movie/${movie_id}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    cache: "no-store",
  });
  const data: TMovie = await res.json();

  return (
    <div className="w-[90%] mx-auto bg-neutral-800 py-4 px-3 ">
      <WarningMessage />
      <div className=" w-full lg:max-w-full ">
        {/* Images */}
        <div className="group min-h-[300px] relative bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Image
            src={`${IMAGE_URL}${data.backdrop_path}`}
            alt={data.title}
            sizes="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            fill
            priority
            className="bg-gray-400"
          />
          <Image
            className="opacity-0 bg-gray-400 duration-300 group-hover:opacity-100"
            src={`${IMAGE_URL}${data.poster_path}`}
            alt={data.title}
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            fill
            priority
          ></Image>
        </div>
        {/* Images */}
        {/* Description and title */}
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              {data.adult ? (
                <CiLock className="text-xl text-red-500" />
              ) : (
                <CiUnlock className="text-xl text-green-500" />
              )}
              {data.adult ? "Adult Only" : "All Ages"}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {data.title || data.original_title}
            </div>
            <p className="text-gray-700 text-base">{data.overview}</p>
          </div>
          <hr />
          <div>
            {/* Description and title */}
            {/* Production Companies */}
            <div className="flex flex-col gap-3 bg-gray-100 shadow-sm px-2 py-1 my-3">
              <div>
                <p>Production Companies</p>
              </div>
              <div className="flex gap-8 sm:gap-6 items-center overflow-x-auto">
                {data.production_companies.map((item) => (
                  <div
                    className="flex flex-col gap-2 items-center"
                    key={item.id + "-" + item.name}
                  >
                    <div className="relative bg-gray-50 rounded-full h-[60px] w-[60px] flex items-center justify-center overflow-hidden ">
                      <Image
                        src={`${IMAGE_URL}${item.logo_path}`}
                        alt="company logo"
                        fill
                        sizes="100%"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        className=" bg-gray-300"
                      ></Image>
                    </div>
                    <span className="text-[12px] sm:text-sm hover:text-gray-900 duration-300 text-gray-600">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            {/* Production Companies */}

            {/* languages */}
            <div className="my-3">
              <h1>Spoken Languages:</h1>
              <div className="flex gap-2 items-center">
                {data.spoken_languages.map((language) => (
                  <div
                    key={language.iso_639_1}
                    className="text-[12px] hover:text-gray-900 duration-300 text-gray-600"
                  >
                    {language.english_name}
                  </div>
                ))}
              </div>
            </div>
            {/* languages */}
            {/* Vote Count and rate */}
            <div className="my-3">
              <p>
                Vote Count:{" "}
                <span className="font-bold text-red-600">
                  {data.vote_count}
                </span>{" "}
                Votes
              </p>
              <p>
                Vote Average:{" "}
                <span className="font-bold text-red-600">
                  {data.vote_average}
                </span>
              </p>
            </div>
            {/* Vote Count and rate */}
            {/* Genres */}
            <div className="my-3">
              <p>Genres:</p>
              <div className="flex gap-2 items-center">
                <FaHandPointRight />
                {data.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-[16px] hover:text-gray-900 duration-300 text-gray-600"
                  >
                    <Link rel="preload" href={`/movies/list/${genre.id}`}>
                      {genre.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            {/* Genres */}
          </div>
          {/* Release Date */}
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-600 font-semibold">
                Date : {data.release_date}
              </p>
            </div>
          </div>
          {/* Release Date */}
          <Link
            target="_blank"
            className="w-full text-center bg-neutral-800 text-white px-3 py-2 rounded-md mt-5 hover:bg-neutral-700 duration-200"
            href={data.homepage}
          >
            Main Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
