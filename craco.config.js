module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source map loading for @capacitor-community/admob
      webpackConfig.module.rules.push({
        test: /\.js$/,
        use: [
          {
            loader: require.resolve('source-map-loader'),
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                return !resourcePath.includes('@capacitor-community/admob');
              },
            },
          },
        ],
      });
      return webpackConfig;
    },
  },
};
