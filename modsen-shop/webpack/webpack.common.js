const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  name: 'client',
  entry: {
    'react-app-setup': path.resolve(__dirname, '..', './src/index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.graphql'],
    mainFields: ['source', 'module', 'main'],
    modules: [path.resolve('node_modules')],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/firebase': path.resolve(__dirname, 'src/firebase'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
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
        type: 'asset/inline',
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
      favicon: path.resolve(__dirname, '..', './public/images/favicon.png'),
      showErrors: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[fullhash].css',
      chunkFilename: '[id].css',
    }),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv({
      path: '.env',
    }),
  ],
  stats: 'errors-only',
};
