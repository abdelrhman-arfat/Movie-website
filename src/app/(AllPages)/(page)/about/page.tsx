import Card from "@/app/components/common/SecondCard";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-[90%] min-h-[300px] py-6 flex flex-col md:flex-row items-center justify-center gap-8  mx-auto bg-neutral-800 ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white text-2xl sm:text-3xl">About ME :</h1>
        <Card />
      </div>
      <div className="flex items-center flex-col gap-2 max-w-[450px]">
        <p className="mt-5 text-white text-xl font-bold">APP INFO :</p>
        <p className="py-2 px-5 text-[16px] text-white">
          This website is a simple movie website, build with next js &
          TypeScript & Redux & tailwind css, You can Login & sign up and logout
          safely, In this app i care with safe API operations to save the token
          and api by doing inner backend {"(API ROUTES)"} , you can manage your
          movies list , favorites and watchlist , But the are some +18 Images i
          wish you go on it , with my pleasures....
        </p>
        <Link
          target="_blank"
          className="text-center px-3 py-1 mt-5 text-white bg-gray-600 rounded-md hover:bg-gray-500 duration-300"
          href={"https://github.com/abdelrhman-arfat/Movie-website"}
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default About;
