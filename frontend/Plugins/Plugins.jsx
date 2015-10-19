'use strict'

var React = require('react')
var GoogleAnalytics = require('./GoogleAnalytics/GoogleAnalytics.jsx')
var TapEvent = require('./TapEvent/TapEvent.jsx')
var WebFonts = require('./WebFonts/WebFonts.jsx')

module.exports = React.createClass({
  propTypes: {
    fonts: React.PropTypes.array
  }
, render: function render() {
    return (
      <div>
        <GoogleAnalytics/>
        <TapEvent/>
        <WebFonts fonts={this.props.fonts}/>
      </div>
    )
  }
})
