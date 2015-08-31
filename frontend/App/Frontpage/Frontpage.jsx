'use strict'

var React = require('react')
var SocialList = require('./SocialList/SocialList.jsx')

module.exports = React.createClass({
  propTypes: {
    connected: React.PropTypes.bool
  , current: React.PropTypes.bool
  , momentLocale: React.PropTypes.string
  , socialIcons: React.PropTypes.array
  , socialPosts: React.PropTypes.array
  , strings: React.PropTypes.object
  }
, getInitialState: function getInitialState() {
    require('./frontpage.scss')

    return null
  }
, socialIconsMapper: function socialIconsMapper(icon) {
    return (
      <div
        className='social-icon-container'
        key={icon.type}
      >
        <a
          className={'fa fa-' + icon.type}
          href={icon.link}
          target='_blank'
        ></a>
      </div>
    )
  }
, render: function render() {
    if (!this.props.current) {
      return false
    }

    var socialIcons = this.props.socialIcons.map(this.socialIconsMapper)

    return (
      <section id='frontpage'>
        <header className='center-align'>
          <h1>{this.props.strings.greeting}</h1>
          <p>{this.props.strings.introduction}</p>
          <b>{
            this.props.connected ?
              this.props.strings.connected :
              this.props.strings.disconnected
          }</b>
        </header>
        <article className='social-icons center-align container'>
          <h1 className='row'>{socialIcons}</h1>
        </article>
        <article className='container'>
          <SocialList
            momentLocale={this.props.momentLocale}
            posts={this.props.socialPosts}
            strings={this.props.strings.social}
          />
        </article>
      </section>
    )
  }
})
