const withPreconstruct = require("@preconstruct/next");

module.exports = withPreconstruct({
  experimental: {
    esmExternals: "loose",
  },
});