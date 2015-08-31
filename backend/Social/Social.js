'use strict'

const async = require('async')
const debug = require('debug')('suitupalex:social')

function Social() {
  this.posts = []

  this.instagram = require('./integrations/instagram')
  this.twitter = require('./integrations/twitter')
  this.github = require('./integrations/github')
  this.youtube = require('./integrations/youtube')
}

Social.prototype.flatten = function flatten(result, post) {
  return result.concat(post)
}

Social.prototype.sort = function sort(a, b) {
  return b.createdAt - a.createdAt
}

Social.prototype.getPosts = function getPosts(cb) {
  debug('Fetching social posts.')

  const self = this

  const tasks = [
    self.instagram.getPosts
  , self.twitter.getPosts
  , self.youtube.getPosts
  , self.github.getPosts
  ]

  async.parallel(tasks, function socialPostsUpdate(error, posts) {
    debug('Flattening and sorting social posts.')
    if (error) {
      return cb(error)
    }

    self.posts = posts
      .reduce(self.flatten, [])
      .sort(self.sort)

    return cb(null, self.posts)
  })
}

module.exports = Social
