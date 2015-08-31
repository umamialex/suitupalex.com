'use strict'

var debug = require('debug')('suitupalex:app')
var io = require('socket.io-client')
var React = require('react')
var Material = require('material-ui')

var TitleBar = require('./TitleBar/TitleBar.jsx')
var Frontpage = require('./Frontpage/Frontpage.jsx')
var Snackbar = require('./Snackbar/Snackbar.jsx')

var LOCALES = require('./localization/locales.json')
var STRINGS = {
  'en-US': require('./localization/en/us.json')
, 'fr-FR': require('./localization/fr/fr.json')
, 'es-ES': require('./localization/es/es.json')
}

module.exports = React.createClass({
  propTypes: {
    settingsPrefix: React.PropTypes.string
  , socketUrl: React.PropTypes.string
  }
, getInitialState: function getInitialState() {
    window.app = this

    // Styles
    require('./app.scss')

    // Socket
    var socket = {}
    if (typeof this.props.socketUrl === 'string') {
      socket = io(this.props.socketUrl)

      socket.on('connect', this.onSocketConnect)
      socket.on('disconnect', this.onSocketDisconnect)
      socket.on('social update', this.onSocialUpdate)
    }

    // Locale
    var locale = this.loadSetting('locale') || LOCALES.english.us

    return {
      currentView: 'frontpage'
    , socket: socket
    , locale: locale
    , strings: STRINGS[locale]
    , snackbarMessage: ''
    , socialPosts: []
    }
  }
, onSocialUpdate: function onSocialUpdate(socialPosts) {
    debug('Social update.', socialPosts)
    this.setState({
      socialPosts: socialPosts
    })
  }
, onSocketConnect: function onSocketConnect() {
    debug('Socket connected.')
    this.socketSystemEvent()
  }
, onSocketDisconnect: function onSocketDisconnect() {
    debug('Socket disconnected.')
    this.socketSystemEvent()
  }
, socketSystemEvent: function socketSystemEvent() {
    this.setState({
      socket: this.state.socket
    })
  }
, disconnectSocket: function disconnectSocket() {
    this.state.socket.disconnect()
  }
, setLocale: function toggleMenu(locale) {
    this.saveSetting('locale', locale)

    this.setState({
      locale: locale
    , strings: STRINGS[locale]
    })
  }
, loadSetting: function getSetting(key) {
    if (!window.localStorage) {
      return debug('LocalStorage not implemented.')
    }

    return localStorage.getItem(this.props.settingsPrefix + key)
  }
, saveSetting: function setSetting(key, value) {
    if (!window.localStorage) {
      return debug('LocalStorage not implemented.')
    }

    this.refs.settingSnackbar.show()
    this.setState({
      snackbarMessage: 'Saved ' + key + ' setting.'
    })

    localStorage.setItem(this.props.settingsPrefix + key, value)
  }
, render: function render() {
    return (
      <div>
        <TitleBar
          setLocale={this.setLocale}
          style={{position: 'fixed', top: 0}}
          title={this.state.strings[this.state.currentView].title}
        />
        <Frontpage
          connected={this.state.socket.connected}
          current={this.state.currentView === 'frontpage'}
          momentLocale={this.state.locale.split('/')[0]}
          socialIcons={[
            {
              type: 'instagram'
            , link: 'https://instagram.com/suitupalex'
            }
          , {
              type: 'github'
            , link: 'https://github.com/suitupalex'
            }
          , {
              type: 'twitter'
            , link: 'https://twitter.com/suitupalex'
            }
          , {
              type: 'linkedin'
            , link: 'https://linkedin.com/in/suitupalex'
            }
          , {
              type: 'reddit'
            , link: 'https://reddit.com/u/suitupalex'
            }
          , {
              type: 'youtube'
            , link: 'https://youtube.com/suitupalex'
            }
          , {
              type: 'soundcloud'
            , link: 'https://soundcloud.com/suitupalex'
            }
          , {
              type: 'envelope'
            , link: 'mailto:alex@suitupalex.com'
            }
          ]}
          socialPosts={this.state.socialPosts}
          strings={this.state.strings.frontpage}
        />
        <Snackbar
          message={this.state.snackbarMessage}
          ref='settingSnackbar'
        />
        <div className='github-fork-ribbon-wrapper right-bottom'>
          <div className='github-fork-ribbon'>
            <a href='https://github.com/suitupalex/suitupalex.com'>Fork me on Github</a>
          </div>
        </div>
      </div>
    )
  }
})
