import { ACCESS_TOKEN, API_URL } from "@/app/constant/api_accts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("user_id");
  const movie_id = searchParams.get("movie_id");
  const action = searchParams.get("action");
  if (!id || !movie_id || !action)
    return NextResponse.json(
      { success: false, message: "Missing required parameters" },
      { status: 400 }
    );
  try {
    const res = await fetch(`${API_URL}/account/${id}/favorite`, {
      method: "POST",
      headers: {
        accept: "application/json",
        'content-type': "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: +movie_id,
        favorite: action === "true" ? true : false,
      }),
    });
    const data = await res.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to add movie to favorites" + err },
      { status: 500 }
    );
  }
}
