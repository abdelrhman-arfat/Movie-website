import { NextResponse } from "next/server";
import { getUserInfoWithSession } from "@/app/func/Auth";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Missing credentials" },
        { status: 400 }
      );
    }

    const { data, status } = await getUserInfoWithSession(username, password);

    if (status === 200) {
      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { message: "username or password is wrong" },
      { status: 500 }
    );
  }
}
