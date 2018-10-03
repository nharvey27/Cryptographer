const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2', 'es2017'],
        },
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules', './node_modules/grommet/node_modules'],
            },
          },
        ],
      },
    ],
  },

  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
