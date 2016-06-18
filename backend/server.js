'use strict'

const env = require('../lib/env')
const log = require('../lib/log')
const paths = require('../lib/paths')

const ContentManager = require('./ContentManager/ContentManager')
const HttpServer = require('./HttpServer/HttpServer')

const contentManager = new ContentManager({
  accessToken: env.CONTENTFUL_ACCESS_TOKEN
, fetchInterval:
    parseFloat(env.FETCH_INTERVAL ? env.FETCH_INTERVAL : 30) * 60000
, isProduction: env.NODE_ENV === 'production'
, log: log.contentManager
, space: env.CONTENTFUL_SPACE
})

const httpServer = new HttpServer({
  baseJsPath: paths.BASE_JS
, contentManager: contentManager
, log: log.httpServer
, port: env.PORT
, viewPath: paths.FRONTEND
})

httpServer.start()
contentManager.startFetchInterval(httpServer.emitContentUpdate)
