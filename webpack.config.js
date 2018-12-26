'use strict'

const pkg = require('./package.json')
const path = require('path')
const webpack = require('webpack')

const packagePlugin = new webpack.DefinePlugin({
  'pkg.VERSION': JSON.stringify(pkg.version),
})

const plugins = [
  packagePlugin,
]

module.exports = {
  entry: {
    base: './spa.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        }],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules/compass-mixins/lib',
              ],
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './node_modules/compass-mixins/lib/_compass.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|ttf|eot|woff(2)?)$/,
        use: ['url-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
}
