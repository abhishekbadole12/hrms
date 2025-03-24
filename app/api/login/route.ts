import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Mock user authentication
  if (email === "test@gmail.com" && password === "password123") {
    const response = NextResponse.json({ message: "Login successful" });

    // Set authentication cookie (Valid for 7 days, HttpOnly for security)
    response.cookies.set("user", JSON.stringify({ email }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}