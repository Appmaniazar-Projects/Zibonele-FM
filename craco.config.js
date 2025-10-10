module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Disable source maps to avoid warnings
      webpackConfig.devtool = false;
      
      // Remove all existing source-map-loader rules
      webpackConfig.module.rules = webpackConfig.module.rules.filter(
        rule => !(rule.loader && rule.loader.includes('source-map-loader'))
      );

      // Add a rule to handle source maps with exclusions
      webpackConfig.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [{
          loader: 'source-map-loader',
          options: {
            filterSourceMappingUrl: (url, resourcePath) => {
              // Skip source map loading for excluded modules
              const excludedPatterns = [
                /[\\/]node_modules[\\/]@firebase[\\/]/,
                /[\\/]node_modules[\\/]@capacitor-community[\\/]admob[\\/]/,
                /[\\/]node_modules[\\/]react-is[\\/]/,
                /[\\/]node_modules[\\/]prop-types[\\/]/,
                /[\\/]node_modules[\\/]react-router[\\/]/
              ];
              
              const shouldExclude = excludedPatterns.some(pattern => 
                resourcePath.match(pattern)
              );
              
              return !shouldExclude;
            }
          }
        }]
      });

      // Add a rule to handle the Firebase auth module
      webpackConfig.module.rules.push({
        test: /@firebase[\\/]auth[\\/]dist[\\/]esm2017[\\/]index\.js$/,
        use: 'null-loader'
      });

      // Add a rule to handle duplicate react-is modules
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'react-is': require.resolve('react-is'),
      };

      return webpackConfig;
    }
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: (eslintConfig) => {
      // Disable specific ESLint rules if needed
      eslintConfig.rules = {
        ...eslintConfig.rules,
        '@typescript-eslint/no-unused-vars': 'warn',
      };
      return eslintConfig;
    },
  },
};
