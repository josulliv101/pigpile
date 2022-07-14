const withPreconstruct = require("@preconstruct/next");

module.exports = withPreconstruct({
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "fr-FR", "es-ES"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "en-US",
  },
  experimental: {
    esmExternals: "loose",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
