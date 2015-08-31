'use strict'

var React = require('react')
var Material = require('material-ui')
var ThemeManager = new Material.Styles.ThemeManager()
var IconButton = Material.IconButton
var IconMenu = Material.IconMenu
var MenuItem = require('material-ui/lib/menus/menu-item')
var MenuDivider = require('material-ui/lib/menus/menu-divider')

var LOCALES = require('../../localization/locales.json')

module.exports = React.createClass({
  propTypes: {
    setLocale: React.PropTypes.func
  }
, childContextTypes: {
    muiTheme: React.PropTypes.object
  }
, getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
, setLocale: function setLocale(event, item) {
    this.props.setLocale(item.key)
  }
, render: function render() {
    var localItems = []
    Object.keys(LOCALES).forEach(function(language) {
      Object.keys(LOCALES[language]).forEach(function(country) {
        localItems.push(<MenuItem
          key={LOCALES[language][country]}
          primaryText={language + '/' + country}
        />)
      })
    })

    return (
      <IconMenu
        iconButtonElement={<IconButton
          iconClassName='material-icons'
          iconStyle={{color: '#fff', fill: '#fff'}}
        >active_language</IconButton>}
        onItemTouchTap={this.setLocale}
      >{localItems}</IconMenu>
    )
  }
})
