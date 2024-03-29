import type { StorybookConfig } from "@storybook/html-webpack5";
import path from 'path'; 

const config: StorybookConfig = {
  stories: [
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

    // Add CSS support
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
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
