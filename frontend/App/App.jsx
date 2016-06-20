import io from 'socket.io-client'
import React from 'react'

import Router from '../Router/Router.jsx'

import pkg from '../../package.json'
import {web as log} from 'log'

import './app.sass'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.app = this

    log(`Application started: v${pkg.version}`)

    log('Connecting to socket:', props.url)
    const socket = io(props.url)

    socket.on('connect', this.handleSocketConnect.bind(this))
    socket.on('disconnect', this.handleSocketDisconnect.bind(this))
    socket.on('get content', this.handleSocketGetContent.bind(this))

    this.state = {
      content: null
    , socket
    }
  }

  handleSocketConnect() {
    log('Socket connected.')
  }

  handleSocketDisconnect() {
    log('Socket disconnected.')
  }

  handleSocketGetContent(content) {
    log('Receiving content:', content)
    
    this.setState({content})
  }

  render() {
    return (
      <Router content={this.state.content}/>
    )
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default App
