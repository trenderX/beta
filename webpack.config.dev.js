var path = require('path');
var webpack = require('webpack');
var HappyPack = require('happypack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var getPostCSSConfig = require('./client-src/PostCss.config');

module.exports = {

  /*webpack docs say devtool:eval is faster for build, 
  but sourcemap is needed for react-css-modules.*/
  devtool: 'source-map',
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './client-src/index'
    ],
    //splits our client code from react/redux code
    vendor: ['react', 'redux', 'webpack-hot-middleware/client'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
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
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.join(__dirname, 'client-src')
    }, {
      test:/\.css$/ ,
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
    new webpack.NoErrorsPlugin(),
    new VendorChunkPlugin('vendor'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  /**
   * postCss (http://postcss.org/) is like babel but for css, it allows for
   * use of css4 syntax, autoprefixing, CSS linting, variables and much much more.
   */
   
  // working on config file
  // postcss: function(bundler) {
  //   return getPostCSSConfig(bundler, {})
  // },
  postcss: function() {
    return [
      require('postcss-import')({ addDependencyTo: webpack, path: ['client-src/styles'] }),
      require('precss'),
      require('autoprefixer'),
      require('lost'),
    ]
  }
};
