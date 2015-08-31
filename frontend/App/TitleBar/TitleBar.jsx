'use strict'

var React = require('react')
var Material = require('material-ui')
var ThemeManager = new Material.Styles.ThemeManager()
var AppBar = Material.AppBar
var LanguageMenu = require('./LanguageMenu/LanguageMenu.jsx')

module.exports = React.createClass({
  propTypes: {
    setLocale: React.PropTypes.func
  , title: React.PropTypes.string
  }
, childContextTypes: {
    muiTheme: React.PropTypes.object
  }
, getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
, render: function render() {
    return (
      <AppBar
        className='white'
        iconElementRight={<LanguageMenu setLocale={this.props.setLocale}/>}
        style={{color: '#000', fill: '#000'}}
        title={this.props.title}
        zDepth={0}
      />
    )
  }
})
