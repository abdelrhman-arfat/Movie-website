import TvListSection from "@/app/components/tv/TvListSection";
import React from "react";

interface PageProps {
  params: Promise<{ list_id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { list_id } = await params;

  if (!list_id) {
    return (
      <div className="text-red-500 text-center">Error: No list ID found</div>
    );
  }

  return (
    <div className="w-full bg-neutral-800 py-6">
      <div className="mx-auto w-[90%]">
        <TvListSection list_id={list_id} />
      </div>
    </div>
  );
};

export default Page;
