const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    contentBase: "build/",
    host: "0.0.0.0",
    noInfo: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};
