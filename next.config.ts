import type { NextConfig } from "next";
import { searchIndexingEnabled } from "./src/lib/search-indexing";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/hero/:variant",
        destination: "/",
        permanent: false,
      },
    ];
  },
  async headers() {
    if (searchIndexingEnabled) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
