import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   devIndicators: {
    buildActivity: false,  // Disable the activity indicator
    autoPrerender: false,  // Disable the static route indicator
  },
};

export default nextConfig;
