const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),  
      '@/store': path.resolve(__dirname, 'src/store'),  
    }
  },
};
