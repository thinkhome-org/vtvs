import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // So `opennextjs-cloudflare build` does not recurse into `npm run build`.
  buildCommand: "next build",
};
