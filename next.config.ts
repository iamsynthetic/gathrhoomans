import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
      minify: false,
    },
  },
};

export default nextConfig;
