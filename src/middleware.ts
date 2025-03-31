import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    const isLoginPage = request.nextUrl.pathname === "/login";

    // Redirect unauthenticated users from protected routes
    if (!token && !isLoginPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Prevent authenticated users from accessing the login page
    if (token && isLoginPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("❌ Middleware Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
