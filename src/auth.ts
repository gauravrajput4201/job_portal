import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { redirect } from "next/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider, GitHubProvider],
  callbacks: {
    authorized: async ({ auth, request }) => {
      if (request.nextUrl.pathname == "/login" && auth?.user) {
        console.log("sdsjndj");
        return Response.redirect(new URL("/jobs", request.nextUrl));
        // return false;
      } else if (request.nextUrl.pathname != "/login" && !auth?.user) {
        return false;
      }
      return !!auth;
    },
  },
  pages: {
    signIn: "/login",
  },
});
