const webpack = require('webpack');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: [
    './src/entry.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new WebpackShellPlugin({
      onBuildStart:['echo "Building..."'],
      onBuildEnd:['echo "Success!" && npm run css']
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },{
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    contentBase: "build/",
    host: "0.0.0.0",
    noInfo: false
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
