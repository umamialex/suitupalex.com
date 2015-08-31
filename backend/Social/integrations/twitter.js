'use strict'

const debug = require('debug')('suitupalex:social:twitter')

const Twit = require('twit')

const TWITTER_USER_ID = process.env.TWITTER_USER_ID

const twit = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY
, consumer_secret: process.env.TWITTER_CONSUMER_SECRET
, access_token: process.env.TWITTER_ACCESS_TOKEN
, access_token_secret: process.env.TWITTER_ACCESS_SECRET
})

function twitterPostMapper(post) {
  return {
    id: post.id
  , createdAt: new Date(post.created_at).valueOf()
  , type: 'twitter'
  , imageUrl: null
  , tweet: post.text
  , avatarUrl: post.user.profile_image_url
  , link: 'https://twitter.com/' + TWITTER_USER_ID + '/status/' + post.id_str
  }
}

module.exports = {
  getPosts: function getPosts(cb) {
    debug('Fetching Twitter posts.')

    function getTwitterPostsCallback(error, data) {
      if (error) {
        debug('Error getting tweets.')
        return cb(error)
      }

      debug('Processing Twitter posts.')
      cb(null, data.map(twitterPostMapper))
    }

    twit.get(
      'statuses/user_timeline'
    , {user_id: TWITTER_USER_ID, count: 10}
    , getTwitterPostsCallback
    )
  }
}
