'use strict'

const async = require('async')
const debug = require('debug')('suitupalex:social:github')
const moment = require('moment')

const Github = require('github-api')

const github = new Github({
  token: process.env.GITHUB_OAUTH_TOKEN
, auth: 'oauth'
})

const githubUser = github.getUser()

function githubReposProcessor(rawRepo, cb) {
  const repoFullName = rawRepo.full_name
  const repoInfo = rawRepo.full_name.split('/')
  const repo = github.getRepo(repoInfo[0], repoInfo[1])

  function getGithubCommitsCallback(error, commits) {
    debug('Received Github commits for', repoFullName)

    if (error) {
      if (error.request.responseText.indexOf('empty') > -1) {
        return cb()
      }

      debug(
        'Error getting repo commits:'
      , repoInfo[1]
      , error.request.responseText
      )
      return cb(error)
    }

    const results = commits.reduce(function processCommits(result, commit) {
      if (!commit.author || !commit.commit || !commit.commit.author) {
        return result
      }
      
      if (commit.author.login !== 'suitupalex') {
        return result
      }

      const message = commit.commit.message
      if (
           message.indexOf('Merge pull request') === 0
        || message.indexOf('Version bump.') === 0
      ) {
        return result
      }

      result.push({
        id: commit.sha
      , createdAt: new Date(commit.commit.author.date)
      , type: 'github'
      , message: commit.commit.message
      , repoName: repoFullName
      , avatarUrl: commit.author.avatar_url
      , link: 'https://github.com/' + repoFullName + '/commit/' + commit.sha
      })

      return result
    }, [])

    return cb(null, results)
  }

  repo.getCommits({
    since: moment().subtract(2, 'month').toDate()
  }, getGithubCommitsCallback)
}

function githubCommitFlattener(result, commits) {
  if (commits === undefined) {
    return result
  }

  if (commits.length === 0) {
    return result
  }

  const resultLength = result.length
  var commitLength = commits.length
  for (let i = 0; i < resultLength; i++) {
    let resultCommit = result[i]
    for (let j = 0; j < commitLength; j++) {
      let commit = commits[j]

      if (commit.id !== resultCommit.id) {
        continue
      }

      if (commit.repoName.indexOf('suitupalex') === -1) {
        resultCommit.repoName = commit.repoName
      }

      commitLength--
      commits.splice(j--, 1)
    }
  }

  return result.concat(commits)
}

module.exports = {
  getPosts: function getPosts(cb) {
    debug('Fetching Github commits.')

    function githubCommitMapper(error, results) {
      if (error) {
        debug('Error getting github commits.')
        return cb(error)
      }

      debug('Flattening Github commits.')
      cb(null, results.reduce(githubCommitFlattener, []))
    }

    function getGithubReposCallback(error, repos) {
      async.map(repos, githubReposProcessor, githubCommitMapper)
    }

    githubUser.repos(getGithubReposCallback)
  }
}
