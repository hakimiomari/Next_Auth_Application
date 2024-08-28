import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token");
  const currentRoute = request.nextUrl.pathname;

  const validRoutes = [
    "/auth/login",
    "/auth/signup",
    "/", // Base URL
    "/dashboard",
    "/dashboard/users",
  ];

  if (!access_token && validRoutes.includes(currentRoute)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/users"],
};
