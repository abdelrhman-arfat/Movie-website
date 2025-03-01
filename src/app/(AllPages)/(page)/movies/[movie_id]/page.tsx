import { ACCESS_TOKEN, API_URL } from "@/app/constant/api_accts";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { movie_id: string } }) => {
  const { movie_id } = await params;
  const res = await axios.get(`${API_URL}/movie/${movie_id}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  console.log(res.data);
  return <div>page</div>;
};

export default page;
