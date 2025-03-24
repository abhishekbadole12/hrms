import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  //   const user = request.cookies.get("user");
  const user = true;

  if (!user) {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", '/login'],
};
