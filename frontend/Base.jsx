'use strict'

var React = require('react')

var Plugins = require('./Plugins/Plugins.jsx')
var App = require('./App/App.jsx')

React.render(<Plugins fonts={['Roboto']}/>, document.body)
React.render(
  <App settingsPrefix='sua_' socketUrl={process.env.SOCKET_URL}/>
, document.body
)
