const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const Dotenv = require('dotenv-webpack');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    'react-app-setup': path.resolve(__dirname, '..', './src/index.tsx'), // choosing the multiple entry point pattern to give me naming flexibility of my output bundles
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.graphql'], // allows us leave out extensions when importing
    mainFields: ['source', 'module', 'main'],
    modules: [path.resolve('node_modules')],
    alias: {
      // '@/images': path.resolve(__dirname, '..', 'src/assets/images'),
      // '@/components': path.resolve(__dirname, '..', 'src/components'),
      // '@/fonts': path.resolve(__dirname, '..', 'src/assets/fonts'),
      // '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // use babel loaders for the files that matches the test rule
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline', // note: you can also use asset/resource for svgs, but it is best when you have large svgs, so it enables caching and also outputs a smaller js bundle size but it increases the number of network request as svgs are emitted as separate files. But asset/inline is best for small svgs. svgs are embedded into js bundles as data urls so it increases bundle size, but reduces http requests.
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name]_[fullhash].js',
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: path.resolve(__dirname, '..', './public/images/favicon.png'), // browser icon
      showErrors: true,
    }), // Injects the bundled js file into the html file so we don't have to do that manually.
    new MiniCssExtractPlugin({
      filename: '[name]_[fullhash].css',
      chunkFilename: '[id].css',
    }), // ensures our styles are outputed separetly.
    new WebpackManifestPlugin({
      writeToFileEmit: true,
    }), // a webpack plugin that extracts CSS into separate files. It creates a separate CSS file per JS file containing CSS. It minifies and optimizes css for better performance. It also improves caching.
    new ForkTsCheckerWebpackPlugin(), //is a webpack plugin that runs the TypeScript type checker (tsc) on a separate process. This helps to speed up the build process by running type checking asynchronously in parallel with the webpack build.
    new Dotenv({
      path: '.env',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'public/assets', to: 'assets' }],
    // }),
  ],
  stats: 'errors-only',
};
