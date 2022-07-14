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
    {
      directory: "../../nextjs/components/landmarks",
      files: "**/*.stories.tsx",
      titlePrefix: "Landmarks",
    },
    {
      directory: "../../nextjs/pages",
      files: "**/*.stories.tsx",
      titlePrefix: "Pages",
    },
  ],
  addons: [
    "@chakra-ui/storybook-addon",
    "storybook-addon-next-router",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  staticDirs: ["../../nextjs/public"],
  env: (config) => ({
    ...config,
    IS_STORYBOOK: true,
    NEXT_PUBLIC_STRIPE_API_KEY:
      "pk_test_51KS10YEIuGVvU2MeS14tENtb7kldKxgxJdr8cjxbDS2dfSYYUM4YegqHH3LCD2kDJYJLWdsOXzlkVRWrHXAI2cVk00DWLlxoO8",
  }),
};
