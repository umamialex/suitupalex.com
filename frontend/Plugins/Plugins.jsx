'use strict'

var React = require('react')
var TapEvent = require('./TapEvent/TapEvent.js')
var WebFonts = require('./WebFonts/WebFonts.js')

module.exports = React.createClass({
  propTypes: {
    fonts: React.PropTypes.array
  }
, render: function render() {
    return (
      <div>
        <TapEvent/>
        <WebFonts fonts={this.props.fonts}/>
      </div>
    )
  }
})
