'use strict'

const Hapi = require('hapi')
const Vision = require('vision')
const Inert = require('inert')
const removeMarkdown = require('remove-markdown')

const WebSocket = require('./WebSocket/WebSocket')
const log = require('../../lib/log.js').httpServer

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

    this.canonical = options.canonical

    this.register(Vision, this.handleVisionRegister.bind(this))
    this.register(Inert)

    this.get('/favicon.ico', this.handleGetFavicon.bind(this))
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
    log('Registering GET route:', path)

    this.server.route({
      method: 'GET'
    , path: path
    , handler: handler
    })
  }

  // Start
  start(handler) {
    log('Starting.')

    this.server.start(handler || this.handleStart)
  }

  // Handlers
  handleVisionRegister(error) {
    log('Registering Vision.')

    if (error) {
      log('Error registering Vision:', error)
      throw error
    }

    this.server.views({
      engines: {pug: require('pug')}
    , path: this.viewPath
    })
  }

  handleGetFavicon(request, response) {
    log('Serving favicon.')

    response('success')
  }

  handleGetWildcard(request, response) {
    const cm = this.contentManager
    const path = request.url.path

    log('Serving path:', path)

    const blogPost = cm.getBlogPost(path.replace('/', ''))

    log('Is a blog post:', Boolean(blogPost), blogPost)

    const data = blogPost
      ? {
          canonical: this.canonical
        , description: removeMarkdown(blogPost.summary)
        , keywords: blogPost.tags
            .map((tag) => {return tag.title})
        , title: `${cm.get('globalElements.pageTitlePrefix')}${blogPost.title}`
        }
      : {
          canonical: this.canonical
        , description: cm.get('globalElements.description')
        , keywords: cm
            .get('globalElements.tags')
            .map((tag) => {return tag.title})
        , title: cm.get('globalElements.title')
        }

    response.view('base', data)
  }

  handleGetBaseJs(request, response) {
    log('Serving base.js.')

    response.file(this.baseJsPath)
  }

  handleGetContent(request, response) {
    log('Serving content.')

    response(this.contentManager.data)
  }

  // Emit Content Update
  emitContentUpdate() {
    this.webSocket.emitAll('get content', this.contentManager.data)
  }
}

module.exports = HttpServer
