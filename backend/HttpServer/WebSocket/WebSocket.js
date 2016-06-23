'use strict'

const socketio = require('socket.io')

const log = require('../../../lib/log').webSocket

class WebSocket {
  constructor(options) {
    this.io = socketio(options.listener)
    this.contentManager = options.contentManager

    this.on('connection', this.handleConnection.bind(this))
  }

  on(...args) {
    this.io.on(...args)
  }

  handleConnection(socket) {
    log('Handling connection')

    socket.emit('get content', this.contentManager.data)

    socket.on('get content', function handleFetchContent() {
      log('Handling content request.')

      socket.emit('get content', this.contentManager.data)
    })
  }

  emitAll(event, data) {
    log('Emitting to all clients:', event, data)

    this.io.sockets.emit(event, data)
  }
}

module.exports = WebSocket
