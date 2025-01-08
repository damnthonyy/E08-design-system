/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
    async viteFinal(config) {
      return mergeConfig(config, {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `@import "src/styles/variables.scss";`,
            },
          },
        },
      });
    },
  },
};
export default config;
