import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentCookie = request.cookies.get("nextJs-cookie");
  console.log(currentCookie.value);

  const dummyUserRole = {
    role: "admin",
    email: "test@admin.com",
  };
  const isServicesPage = request.nextUrl.pathname.startsWith("/Services");
  const isAdmin = dummyUserRole.role === "admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}
