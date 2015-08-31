'use strict'

const debug = require('debug')('suitupalex:social:instagram')

const Instagram = require('instagram-node')

const ig = Instagram.instagram()

ig.use({
  client_id: process.env.IG_CLIENT_ID
, client_secret: process.env.IG_CLIENT_SECRET
})

function igPostMapper(post) {
  const img = post.images.standard_resolution

  return {
    id: post.id
  , createdAt: new Date(parseInt(post.created_time) * 1000).valueOf()
  , type: 'instagram'
  , imageUrl: img.url
  , caption: post.caption.text
  , avatarUrl: post.user.profile_picture
  , link: post.link
  }
}

module.exports = {
  getPosts: function getPosts(cb) {
    debug('Fetching IG posts.')

    function getIgPostsCallback(error, result) {
      if (error) {
        debug('Error getting instagram posts.')
        return cb(error)
      }

      debug('Processing instagram posts.')
      cb(null, result.map(igPostMapper))
    }

    ig.user_media_recent(process.env.IG_USER_ID, {count: 10}, getIgPostsCallback)
  }
}

