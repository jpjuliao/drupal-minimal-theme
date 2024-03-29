import type { StorybookConfig } from "@storybook/html-webpack5";

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  webpackFinal: async (config, { configType }) => {
    // Add twig-loader rule for Twig files
    config.module.rules.push({
      test: /\.twig$/,
      use: 'twig-loader',
    });

    // Return the updated Storybook Webpack config
    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
