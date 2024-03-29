import { StorybookConfig } from "@storybook/html-webpack5";
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {
              },
            },
            require.resolve("postcss-loader"),
          ],
        },],
      }
    }),
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
      sideEffects: true,
      use: [
        // require.resolve("style-loader"),
        // {
        //   loader: require.resolve("css-loader"),
        //   options: {
        //   },
        // },
        {
          loader: 'postcss-loader',
          options: {
            implementation: require('postcss')
          }
        },
      ],
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
