var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
  //webpack docs say devtool:eval is faster for build, not file size.
  devtool: 'eval',
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      // 'webpack-hot-middleware/client',
      // 'eventsource-polyfill', // necessary for hot reloading with IE
      './client-src/index'
    ],
    vendor: ['react', 'redux'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loader: 'babel',
        include: path.join(__dirname, 'client-src')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, 
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      }, 
      { 
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url"
      },
    ]
  },

  plugins: [

    //HtmlWebpackPlugin creates an index.html file in dist and injects script tag.
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new VendorChunkPlugin('vendor'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.NoErrorsPlugin(),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
};