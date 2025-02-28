import { NextResponse } from "next/server";
import axios from "axios";
import { API_URL, ACCESS_TOKEN } from "@/app/constant/api_accts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";

  try {
    const res = await axios.get(
      `${API_URL}/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          accept: "application/json",
        },
      }
    );
    return NextResponse.json(
      { success: true, data: res.data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Error fetching movies" },
      { status: 500 }
    );
  }
}
