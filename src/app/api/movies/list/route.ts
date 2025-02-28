import { ACCESS_TOKEN, API_URL } from "@/app/constant/api_accts";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get(`${API_URL}/genre/movie/list?language=en`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

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
