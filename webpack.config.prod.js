var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
  //webpack docs say 'cheap-module-source-map' is best for prod.
  devtool: 'source-map',
  entry: {
    app: './client-src/index',
    vendor: ['react', 'redux', 'react-dom'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    //change publicPath to deploy site later...
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    modules: [
      'client-src',
      'node_modules',
    ],
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /styles/],
        include: path.join(__dirname, 'client-src'),
      }, {
        test: /\.css$/,
        include: [/client-src/, /react-toolbox/, /flexboxgrid/],
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'sass?sourceMap',
          'postcss'
        ]
      }, {
        test: /\.scss$/,
        include: [/client-src/, /react-toolbox/, /flexboxgrid/],
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourcMap',
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[\s\S]+)?$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json-loader',
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
    }),
  ],
  postcss: function() {
    return [
      require('postcss-import')({ addDependencyTo: webpack, path: ['client-src/styles'] }),
      require('precss'),
      require('autoprefixer'),
      require('lost'),
      require('postcss-inline-svg')({
        path: 'client-src/assets/svg'
      })
      //require('cssnano')

    ]
  }
};
