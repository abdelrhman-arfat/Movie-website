import { ACCESS_TOKEN, API_URL } from "@/app/constant/api_accts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url =  new URL(request.url);
  const list_id = await url.searchParams.get("list_id");
  const page = (await url.searchParams.get("page")) || "1";
  if (!list_id) {
    return NextResponse.json(
      { success: false, message: "Missing list_id" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${API_URL}/discover/tv?with_genres=${list_id}&page=${page}&language=en-US`,

      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: `API request failed with status ${res.status}`,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching TV genres list",
      },
      { status: 500 }
    );
  }
}
