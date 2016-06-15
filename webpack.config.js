'use strict'

const _ = require('lodash')
const webpack = require('webpack')

const env = require('./lib/env')
const paths = require('./lib/paths')

function envTransformer(result, value, key) {
  result[key] = JSON.stringify(value)

  return result
}

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': _.transform(env, envTransformer, {})
})

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin()

const plugins = [
  processEnvPlugin
]

if (env.NODE_ENV === 'production') {
  plugins.push(uglifyPlugin)
}

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/
      , loaders: [
          'babel-loader?presets[]=es2015,presets[]=react'
        ]
      }
    , {test: /\.json$/, loader: 'json'}
    , {test: /\.sass$/, loaders: ['style', 'css', 'sass']}
    , {test: /\.(ttf|svg|png|jpg)$/, loader: 'url-loader'}
    ]
  }
, resolve: {
    root: [
      paths.FRONTEND
    , paths.I18N
    , paths.LIB
    ]
  }
, entry: {
    base: './frontend/Base.jsx'
  }
, output: {
    path: './dist'
  , filename: '[name].bundle.js'
  }
, plugins
}
