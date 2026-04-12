import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./lib/session";

export async function middleware(request: NextRequest) {
  try {
    // 1. Get the session cookie and decrypt it
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    const isLoggedIn = !!session?.user_id;
    // console.log("Is User LoggedIn:", isLoggedIn);

    // 2. Define route types
    // const protectedRoutes = ["/dashboard"];
    // const publicRoutes = ["/login"];

    const currentPath = request.nextUrl.pathname;

    const isOnLoginPage = currentPath === "/login";
    const isOnDashboard = currentPath.startsWith("/dashboard");
    const isRoot = currentPath === "/";

    const restrictedRoutes = ["/chat"];

    // ✅ Root route handling
    if (isRoot) {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }

    // Case 1: If NOT logged in and trying to access a protected route, redirect to login
    if (isOnDashboard && !isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    // Case 2: If logged in and trying to access login page, redirect to dashboard
    if (isOnLoginPage && isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    // Block restricted routes
    const isRestrictedRoute = restrictedRoutes.some((route) =>
      currentPath.startsWith(route)
    );

    if (isRestrictedRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
