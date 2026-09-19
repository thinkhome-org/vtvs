import type { MetadataRoute } from "next";
import { searchIndexingEnabled } from "@/lib/search-indexing";

export default function robots(): MetadataRoute.Robots {
  if (!searchIndexingEnabled) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
