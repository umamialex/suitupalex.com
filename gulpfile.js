'use strict'

var debug = require('debug')('suitupalex:gulp')
var eslint = require('gulp-eslint')
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var path = require('path')
var webpack = require('webpack')

var nodemonInstance
var compiler

var processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    'SOCKET_URL': '"' + process.env.SOCKET_URL + '"'
  }
})

gulp.task('dev', ['watch', 'run'])
gulp.task('dev:strict', ['lint', 'watch', 'run'])

gulp.task('build', function gulpBuild() {
  if (compiler) {
    return
  }

  compiler = webpack({
    module: {
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM'},
        {test: /\.js$/, loader: 'uglify'},
        {test: /\.scss$/, loader: 'style!css!sass'},
        {test: /\.jade$/, loader: 'jade'},
        {test: /\.json$/, loader: 'json'},
        {test: /\.(eot|woff|ttf|svg|png)$/, loader: 'url-loader'}
      ]
    },
    resolve: {
      root: [
        path.join(__dirname, 'frontend'),
        path.join(__dirname, 'frontend', 'App', 'Strings')
      ]
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    entry: './frontend/Base.jsx',
    output: {
      path: './frontend',
      filename: 'base.bundle.js'
    },
    plugins: [processEnvPlugin]
  }, function webpackInitialCompileCb(error) {
    if (error) {
      throw error
    }

    debug('Successfully bundled Frontend (initial).')
  })

  compiler.plugin('compile', function() {
    debug('Frontend bundling started.')
  })
})

gulp.task('watch', ['build'], function gulpWatch() {
  gulp.watch(['./backend/server.js'], ['run'])

  compiler.watch({
    aggregateTimeout: 500,
    poll: true
  }, function webpackWatchCompileCb(error) {
    if (error) {
      throw error
    }

    debug('Successfully bundled Frontend (watch).')
  })
})

gulp.task('run', function gulpRun() {
  if (nodemonInstance) {
    nodemonInstance.emit('restart')
    return nodemonInstance
  }

  return nodemonInstance = nodemon({
    script: './backend/server.js',
    ext: '__manual_restart__'
  })
})

gulp.task('lint', function gulpLint() {
  return gulp.src([
    './backend/**/*.js',
    './frontend/**/*.js',
    '!./frontend/**/*.bundle.js',
    '!./frontend/**/*.min.js'
  ]).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})
