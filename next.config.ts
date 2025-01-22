import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["st3.depositphotos.com"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "www.google.com",
  //       // port: "",
  //       // pathname: "",
  //       // search: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
