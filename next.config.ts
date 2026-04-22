import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/disabled-support/info",
        destination: "/disabled-support/cheongmok/info",
        permanent: true,
      },
      {
        source: "/disabled-support/service",
        destination: "/disabled-support/cheongmok/service",
        permanent: true,
      },
      {
        source: "/disabled-support/procedure",
        destination: "/disabled-support/cheongmok/procedure",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
