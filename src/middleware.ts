// export { auth as middleware } from "@/auth";
import { getToken } from "next-auth/jwt";
import { auth } from "@/auth";

export default auth(async (req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    console.log("-------------", newUrl);
    return Response.redirect(newUrl);
  }
});

export { auth as middleware };

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// // Define your configuration in a separate variable and pass it to NextAuth()
// // This way we can also 'export const config' for use later
// export const config = {
//   providers: [GitHub],
//   pages: {
//     signIn: "/login",
//   },
// };

// export const { signIn, signOut, handlers } = NextAuth(config);
