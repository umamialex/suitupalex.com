'use strict'

const Hapi = require('hapi')
const Vision = require('vision')
const Inert = require('inert')

const WebSocket = require('./WebSocket/WebSocket')

class HttpServer {
  constructor(options) {
    this.viewPath = options.viewPath
    this.baseJsPath = options.baseJsPath

    this.contentManager = options.contentManager

    this.server = new Hapi.Server()

    this.server.connection({
      host: options.host || '0.0.0.0'
    , port: options.port
    })

    this.register(Vision, this.handleVisionRegister.bind(this))
    this.register(Inert)

    this.get('/base.js', this.handleGetBaseJs.bind(this))
    this.get('/{path*}', this.handleGetWildcard.bind(this))
    this.get('/content', this.handleGetContent.bind(this))

    this.webSocket = new WebSocket({
      listener: this.server.listener
    , contentManager: this.contentManager
    })

    this.emitContentUpdate = this.emitContentUpdate.bind(this)
  }

  // Settings
  register(...args) {
    this.server.register(...args)
  }

  // Routes
  get(path, handler) {
    this.server.route({
      method: 'GET'
    , path: path
    , handler: handler
    })
  }

  // Start
  start(handler) {
    this.server.start(handler || this.handleStart)
  }

  // Handlers
  handleVisionRegister(error) {
    if (error) {
      throw error
    }

    this.server.views({
      engines: {pug: require('pug')}
    , path: this.viewPath
    })
  }

  handleGetWildcard(request, response) {
    response.view('base')
  }

  handleGetBaseJs(request, response) {
    response.file(this.baseJsPath)
  }

  handleGetContent(request, response) {
    response(this.contentManager.data)
  }

  // Emit Content Update
  emitContentUpdate() {
    this.webSocket.emitAll('get content', this.contentManager.data)
  }
}

module.exports = HttpServer
