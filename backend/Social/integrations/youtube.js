'use strict'

const debug = require('debug')('suitupalex:social:youtube')

const Youtube = require('youtube-api')

Youtube.authenticate({
  type: 'key'
, key: process.env.GOOGLE_SERVER_KEY
})

module.exports = {
  getPosts: function getPosts(cb) {
    debug('Fetching Youtube videos.')

    function youtubePostReducer(result, post) {
      if (!post.id.videoId) {
        return result
      }

      const snippet = post.snippet
      result.push({
        id: post.id.videoId
      , createdAt: new Date(snippet.publishedAt)
      , type: 'youtube'
      , title: snippet.title
      , description: snippet.description
      , avatarUrl: snippet.thumbnails.default.url
      })

      return result
    }

    function getYoutubePostsCallback(error, response) {
      if (error) {
        debug('Error getting Youtube posts.')
        return cb(error)
      }

      debug('Processing Youtube videos.')
      cb(null, response.items.reduce(youtubePostReducer, []))
    }

    Youtube.search.list({
      channelId: process.env.YOUTUBE_CHANNEL_ID
    , part: 'id,snippet'
    , order: 'date'
    , maxResults: 5
    }, getYoutubePostsCallback)
  }
}
