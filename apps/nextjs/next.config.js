const withPreconstruct = require("@preconstruct/next");

module.exports = withPreconstruct({
  distDir: "../../.next",
  experimental: {
    esmExternals: "loose",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
