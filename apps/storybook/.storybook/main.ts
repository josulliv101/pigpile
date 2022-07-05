module.exports = {
  stories: [
    {
      directory: "../stories/core",
      files: "*.stories.*",
      titlePrefix: "Components",
    },
    {
      directory: "../../../packages/composites",
      files: "**/*.stories.tsx",
      titlePrefix: "Composites",
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
