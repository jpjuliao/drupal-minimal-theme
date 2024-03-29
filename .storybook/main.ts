// .storybook/main.js

module.exports = {
  stories: [
    "../components/**/*.stories.{js,jsx,ts,tsx}", // Include JS/TS stories
    "../components/**/*.stories.yaml" // Include YAML stories
  ],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],

  webpackFinal: async (config, { configType }) => {
    // Add support for Twig files
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
        },
      ],
    });

    // Adjust the default values for Storybook arguments using the args object
    config.module.rules.push({
      test: /\.(stories|story)\.(jsx?|tsx?)$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });

    // Add YAML loader for Storybook to handle YAML files as stories
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });

    return config;
  },

  framework: {
    name: '@storybook/html-vite',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
