'use strict'

var React = require('react')
var Material = require('material-ui')

var Snackbar = Material.Snackbar
var ThemeManager = new Material.Styles.ThemeManager()

module.exports = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  }
, childContextTypes: {
    muiTheme: React.PropTypes.object
  }
, getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
, show: function show() {
    this.refs.snackbar.show()
  }
, render: function render() {
    return (
      <Snackbar
        autoHideDuration={2000}
        message={this.props.message}
        ref='snackbar'
      />
    )
  }
})
