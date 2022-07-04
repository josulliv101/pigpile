module.exports = {
  stories: [
    {
      directory: "../stories/core",
      files: "*.stories.*",
      titlePrefix: "@pigpile/core",
    },
  ],
  addons: [
    "@chakra-ui/storybook-addon",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
};
