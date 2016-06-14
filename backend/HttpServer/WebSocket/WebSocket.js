'use strict'

const socketio = require('socket.io')

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
    socket.emit('get content', this.contentManager.data)

    socket.on('get content', function handleFetchContent() {
      socket.emit('get content', this.contentManager.data)
    })
  }

  emitAll(event, data) {
    this.io.sockets.emit(event, data)
  }
}

module.exports = WebSocket
