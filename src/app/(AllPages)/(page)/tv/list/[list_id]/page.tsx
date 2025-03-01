import TvListSection from "@/app/components/tv/TvListSection";
import React from "react";

const Page = ({ params }: { params: { list_id: string } }) => {
  const { list_id } = params;
  return (
    <div className="w-full bg-neutral-800 py-6">
      <div className="mx-auto w-[90%]">
        <TvListSection list_id={list_id} />
      </div>
    </div>
  );
};
export default Page;
