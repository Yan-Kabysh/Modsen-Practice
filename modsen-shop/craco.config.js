const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),  
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/constants': path.resolve(__dirname, 'src/constants'),  
      '@/firebase': path.resolve(__dirname, 'src/firebase'),  
      '@/helpers': path.resolve(__dirname, 'src/helpers'),  
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/styles': path.resolve(__dirname, 'src/assets/styles'),
    },
    configure: (webpackConfig, { env, paths }) => {
      const svgRuleIndex = webpackConfig.module.rules.findIndex(rule =>
        rule.test && rule.test.toString().includes('svg')
      );

      // Modify existing file-loader rule to ignore SVG files
      if (svgRuleIndex >= 0) {
        webpackConfig.module.rules[svgRuleIndex].exclude = /\.svg$/;
      }

      // Add new rule for SVGR
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
  eslint: {
    mode: 'file',
  },
};
