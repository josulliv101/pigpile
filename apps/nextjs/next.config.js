const withPreconstruct = require("@preconstruct/next");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPreconstruct({
    distDir: "../../.next",
    experimental: {
      esmExternals: "loose",
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
    typescript: {
      ignoreBuildErrors: false,
    },
  })
);
