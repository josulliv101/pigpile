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
  env: (config) => ({
    ...config,
    API_KEY:
      "pk_test_51KS10YEIuGVvU2MeS14tENtb7kldKxgxJdr8cjxbDS2dfSYYUM4YegqHH3LCD2kDJYJLWdsOXzlkVRWrHXAI2cVk00DWLlxoO8",
  }),
};
