'use strict'

var React = require('react')

module.exports = React.createClass({
  propTypes: {
    fonts: React.PropTypes.array
  }
, getInitialState: function getInitialState() {
    require('./webfont.min.js')

    window.WebFont.load({
      google: {
        families: this.props.fonts
      }
    })

    return null
  }
, render: function render() {
    return false
  }
})
