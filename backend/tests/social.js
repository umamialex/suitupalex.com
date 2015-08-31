'use strict'

const assert = require('assert')

const Social = require('../Social/Social.js')

// Test Specifics
const NAME = 'Backend/Social'
const TIMEOUT = 10000

describe(NAME, function describeSocial() {
  const social = new Social()

  function checkEnv(prefix, variables) {
    variables.forEach(function checkEnvVariable(variable) {
      assert(process.env[prefix + '_' + variable])
    })
  }

  it('should verify Instagram integration', function instagram(done) {
    this.timeout(TIMEOUT)

    checkEnv('IG', ['USER_ID', 'CLIENT_ID', 'CLIENT_SECRET'])

    social.instagram.getPosts(function instagramCb(error, posts) {
      if (error) {
        throw error
      }

      assert(posts)
      assert.equal(posts.length, 10)

      done()
    })
  })

  it('should verify Twitter integration', function twitter(done) {
    this.timeout(TIMEOUT)

    checkEnv('TWITTER', [
      'USER_ID'
    , 'CONSUMER_KEY', 'CONSUMER_SECRET'
    , 'ACCESS_TOKEN', 'ACCESS_SECRET'
    ])

    social.twitter.getPosts(function twitterCb(error, posts) {
      if (error) {
        throw error
      }

      assert(posts)
      assert.equal(posts.length, 10)

      done()
    })
  })

  it('should verify Github integration', function github(done) {
    this.timeout(TIMEOUT)

    checkEnv('GITHUB', ['OAUTH_TOKEN'])

    social.github.getPosts(function githubCb(error, posts) {
      if (error) {
        throw error
      }

      assert(posts)
      assert(posts.length > 0)

      done()
    })
  })

  it('should verify Youtube integration', function youtube(done) {
    this.timeout(TIMEOUT)

    checkEnv('GOOGLE', ['SERVER_KEY'])
    checkEnv('YOUTUBE', ['CHANNEL_ID'])

    social.youtube.getPosts(function youtubeCb(error, posts) {
      if (error) {
        throw error
      }

      assert(posts)
      assert(posts.length > 0)

      done()
    })
  })

  it('should verify overall integration', function overall(done) {
    this.timeout(TIMEOUT)

    social.getPosts(function overallCb(error, posts) {
      if (error) {
        throw error
      }

      assert(posts)
      assert(posts.length > 0)

      done()
    })
  })
})
