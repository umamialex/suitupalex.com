'use strict'

const pkg = require('../package.json')
const env = require('../lib/env')
const log = require('../lib/log').server
const paths = require('../lib/paths')

const ContentManager = require('./ContentManager/ContentManager')
const HttpServer = require('./HttpServer/HttpServer')

log(`Application started: v${pkg.version}`)

const contentManager = new ContentManager({
  productionAccessToken: env.CONTENTFUL_PRODUCTION_ACCESS_TOKEN
, previewAccessToken: env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
, fetchInterval:
    parseFloat(env.FETCH_INTERVAL ? env.FETCH_INTERVAL : 30) * 60000
, isProduction: env.NODE_ENV === 'production'
, space: env.CONTENTFUL_SPACE
})

const httpServer = new HttpServer({
  baseJsPath: paths.BASE_JS
, canonical: env.URL
, contentManager: contentManager
, port: env.PORT
, viewPath: paths.FRONTEND
})

httpServer.start()
contentManager.startFetchInterval(httpServer.emitContentUpdate)
