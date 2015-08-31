'use strict'

var React = require('react')

module.exports = React.createClass({
  getInitialState: function getInitialState() {
    var injectTapEventPlugin = require('react-tap-event-plugin')

    injectTapEventPlugin()

    return null
  }
, render: function render() {
    return false
  }
})
