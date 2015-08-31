'use strict'

var debug = require('debug')('suitupalex:social')
var React = require('react')
var Material = require('material-ui')
var ThemeManager = new Material.Styles.ThemeManager()
var Avatar = Material.Avatar
var Card = Material.Card
var CardHeader = Material.CardHeader
var CardTitle = Material.CardTitle
var CardMedia = Material.CardMedia
var CardText = Material.CardText

var moment = require('moment')

var masonry

module.exports = React.createClass({
  propTypes: {
    momentLocale: React.PropTypes.string
  , posts: React.PropTypes.array
  , strings: React.PropTypes.object
  }
, childContextTypes: {
    muiTheme: React.PropTypes.object
  }
, getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
, componentDidUpdate: function componentDidUpdate() {
    if (!window.Masonry) {
      debug('Masonry not loaded.')
      return
    }

    masonry = new Masonry(document.querySelector('.grid'), {
      itemSelector: '.grid-item'
    , columnWidth: '.grid-item'
    , percentPosition: true
    })

    setTimeout(function performMasonry() {
      masonry.layout()
    }, 1000)
  }
, postMapper: function postMapper(post) {
    var item = null
    var createdAt = moment(post.createdAt).locale(this.props.momentLocale).fromNow()
    var avatar = <Avatar src={post.avatarUrl}/>
    function goToPost() {
      location.href = post.link
    }
    switch (post.type) {
      case 'instagram':
        item = (
          <div
            className='grid-item'
            key={post.id}
          >
            <Card
              onClick={goToPost}
              style={{cursor: 'pointer'}}
            >
              <CardHeader
                avatar={avatar}
                subtitle={createdAt}
                title='Instagram'
              />
              <CardMedia
                overlay={<CardTitle
                  subtitle={post.caption}
                />}
              >
                <img src={post.imageUrl}/>
              </CardMedia>
            </Card>
          </div>
        )
      break;
      case 'twitter':
        item = (
          <div
            className='grid-item'
            key={post.id}
          >
            <Card
              onClick={goToPost}
              style={{cursor: 'pointer'}}
            >
              <CardHeader
                avatar={avatar}
                subtitle={createdAt}
                title='Twitter'
              />
              <CardText>{post.tweet}</CardText>
            </Card>
          </div>
        )
      break;
      case 'github':
        item = (
          <div
            className='grid-item'
            key={post.id}
          >
            <Card
              onClick={goToPost}
              style={{cursor: 'pointer'}}
            >
              <CardHeader
                avatar={avatar}
                subtitle={createdAt}
                title='Github'
              />
              <CardText>
                <b>{post.repoName}</b>
                <br/>
                {post.message}
              </CardText>
            </Card>
          </div>
        )
      break;
      case 'youtube':
        item = (
          <div
            className='grid-item'
            key={post.id}
          >
            <Card>
              <CardHeader
                avatar={avatar}
                subtitle={createdAt}
                title='Youtube'
              />
              <CardMedia>
                <div className='video-container'>
                  <iframe
                    allowFullScreen
                    frameBorder='0'
                    height='480'
                    mozallowFullScreen
                    src={'http://www.youtube.com/embed/' + post.id}
                    title={post.title}
                    webkitallowFullScreen
                    width='853'
                  ></iframe>
                </div>
              </CardMedia>
              <CardText>
                <b>{post.title}</b>
                <br/>
                {post.description}
              </CardText>
            </Card>
          </div>
        )
      break;
    }
    return (item)
  }
, render: function render() {
    return (
      <div className='grid'>{this.props.posts.map(this.postMapper)}</div>
    )
  }
})
