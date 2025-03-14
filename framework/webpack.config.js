const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: [
      isDevelopment && 'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, 'browser-side', 'entry.ts')
    ].filter(Boolean),
    output: {
      path: path.resolve(rootDir, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        'framework/jsx': path.resolve(__dirname, 'jsx.ts')
      },
      // fallback: {
      //   "crypto": require.resolve("crypto-browserify"),
      //   "stream": require.resolve("stream-browserify"),
      //   "util": require.resolve("util/"),
      //   "buffer": require.resolve("buffer/"),
      //   "vm": require.resolve("vm-browserify")
      // }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(process.cwd(), 'tsconfig.json'),
              transpileOnly: isDevelopment
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'browser-side', 'template.html'),
        inject: true
      })
    ].filter(Boolean),
    devtool: isDevelopment ? 'inline-source-map' : 'source-map'
  };
};