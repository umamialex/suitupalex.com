'use strict'

// Utility Modules
const debug = require('debug')('suitupalex:server')
const path = require('path')

// Server Modules
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// Proprietary Modules
const Social = require('./Social/Social.js')
const social = new Social()

function socialUpdateCallback(error, posts) {
  if (error) {
    return debug(error)
  }

  io.emit('social update', posts)
}

app.set('views', path.join(__dirname, '..', 'frontend'))
app.set('view engine', 'jade')

app.get('/base.js', function expressBaseJs(request, response) {
  response.sendFile(path.join(__dirname, '..', 'frontend', 'base.bundle.js'))
})

app.get('*', function expressWildcard(request, response) {
  response.render('base')
})

io.on('connection', function ioConnection(socket) {
  debug('Client connected.')
  socket.emit('social update', social.posts)
})

const server = http.listen(process.env.PORT, function serverListen() {
  const host = server.address().address
  const port = server.address().port

  debug('Listening on %s:%s', host, port)

  social.getPosts(socialUpdateCallback)

  setInterval(function intervalGetPosts() {
    social.getPosts(socialUpdateCallback)
  }, 1000 * 60 * 10)
})
