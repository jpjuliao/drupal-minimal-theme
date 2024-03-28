module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [],
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
    return config;
  },
};
