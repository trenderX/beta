var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
  //webpack docs say 'cheap-module-source-map' is best for prod.
  devtool: 'source-map',
  entry: { 
    app: './client-src/index',
    vendor: ['react', 'redux','react-dom'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    //change publicPath to deploy site later...
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /styles/],
        include: path.join(__dirname, 'client-src'),
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
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url"
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
        filename: 'index.html'
      }),
    /**
     * This plugin assigns the module and chunk ids by occurence count. What this
     * means is that frequently used IDs will get lower/shorter IDs - so they become
     * more predictable.
     */
    new webpack.optimize.OccurenceOrderPlugin(),
    /**
     * See description in 'webpack.config.dev' for more info.
     */
   new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    /**
     * Some of you might recognize this! It minimizes all your JS output of chunks.
     * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
     * your production code through this!
     */
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new VendorChunkPlugin('vendor'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
};