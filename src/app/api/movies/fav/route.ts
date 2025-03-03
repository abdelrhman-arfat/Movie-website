import { ACCESS_TOKEN, API_URL } from "@/app/constant/api_accts";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const user_id = searchParams.get("user_id");
if (!user_id) {
  return NextResponse.json(
    { success: false, message: "Missing user_id" },
    { status: 400 }
  );
}
try {
  const res = await axios.get(
    `${API_URL}/account/${user_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const data = await res.data;
  return NextResponse.json({ success: true, data }, { status: 200 });
} catch (err) {
  return NextResponse.json({
    success: false,
    massage: err,
  });
}
}
