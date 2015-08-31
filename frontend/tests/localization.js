'use strict'

jest.autoMockOff()

var objectPath = require('object-path')

var React = require('react/addons')
require('react-tap-event-plugin')()

var Material = require('material-ui')
var IconMenu = Material.IconMenu
var IconButton = Material.IconButton
var MenuItem = require('material-ui/lib/menus/menu-item')

var TestUtils = React.addons.TestUtils
var findTag = TestUtils.findRenderedDOMComponentWithTag
var findType = TestUtils.findRenderedComponentWithType
var findTypes = TestUtils.scryRenderedComponentsWithType

var App = require('../App/App.jsx')
var Frontpage = require('../App/Frontpage/Frontpage.jsx')
var TitleBar = require('../App/TitleBar/TitleBar.jsx')
var LanguageMenu = require('../App/TitleBar/LanguageMenu/LanguageMenu.jsx')
var Plugins = require('../Plugins/Plugins.jsx')

var en = require('../App/localization/en/us.json')
var fr = require('../App/localization/fr/fr.json')
var es = require('../App/localization/es/es.json')

// Test Specifcs
var NAME = 'Frontend/Localization'
var TEXT = {
  FRONTPAGE: [
    'title'
  , 'greeting'
  , 'introduction'
  , ['connection', 'disconnected']
  ]
}

describe(NAME, function describeLocalization() {
  var test = {}

  function pickLanguage(language) {
    TestUtils.Simulate.touchTap(test.button)

    var items = findTypes(test.iconMenu, MenuItem)
    var length = items.length
    for (var i = 0; i < length; i++) {
      if (items[i].props.primaryText !== language) {
        continue
      }

      var a = findTag(items[i], 'a')
      TestUtils.Simulate.touchTap(a)
      break
    }
  }

  function checkText(locale, page, items) {
    items.forEach(function(item) {
      var node
      var text

      if (typeof item === 'string') {
        node = test[item]
        text = item
      } else {
        node = test[item[0]]
        text = item[1]
      }

      expect(node.getDOMNode().textContent).toEqual(
        objectPath.get(locale, [page, text])
      )
    })
  }

  it('should setup a test copy of the app', function setup() {
    test.plugins = TestUtils.renderIntoDocument(
      <Plugins fonts={['Roboto']}/>
    )
    test.app = TestUtils.renderIntoDocument(
      <App socketUrl={null}/>
    )

    test.titleBar = findType(test.app, TitleBar)
    test.languageMenu = findType(test.app, LanguageMenu)
    test.iconMenu = findType(test.languageMenu, IconMenu)
    test.iconButton = findType(test.iconMenu, IconButton)
    test.button = findTag(test.iconButton, 'button')

    test.title = findTag(test.titleBar, 'h1')
    test.frontpage = findType(test.app, Frontpage)
    test.header = findTag(test.frontpage, 'header')
    test.greeting = findTag(test.header, 'h1')
    test.introduction = findTag(test.header, 'p')
    test.connection = findTag(test.header, 'b')
  })

  it('should be in English', function english() {
    checkText(en, 'frontpage', TEXT.FRONTPAGE)
  })

  it('should switch to French', function french() {
    pickLanguage('french/france')
    checkText(fr, 'frontpage', TEXT.FRONTPAGE)
  })

  it('should switch to Spanish', function spanish() {
    pickLanguage('spanish/spain')
    checkText(es, 'frontpage', TEXT.FRONTPAGE)
  })

  it('should switch to English', function englishAgain() {
    pickLanguage('english/us')
    checkText(en, 'frontpage', TEXT.FRONTPAGE)
  })
})
