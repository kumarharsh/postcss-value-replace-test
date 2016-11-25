var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

var config = {
  entry: {
    app: './src/app/index',
  },
  output: {
    path: path.join(__dirname, 'build', ''),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    pathinfo: NODE_ENV !== 'production',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src'), // app-code
        ],
      },
      {
        test:  /\.css$/,
        exclude: path.resolve('./node_modules'),
        loaders: [
          'style-loader',
          'css-loader?modules&camelCase&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    modulesDirectories: ['shared', 'node_modules'],
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: 'process.env.NODE_ENV !== "production"',
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),

    new HtmlWebpackPlugin({
      template: './src/views/index.generator.js',
      inject: false,
    }),
  ],
};

module.exports = config;
