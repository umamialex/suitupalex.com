'use strict'

const _ = require('lodash')
const contentful = require('contentful')

const log = require('../../lib/log').contentManager

class ContentManager {
  constructor(options) {
    this.isProduction = options.isProduction

    this.client = contentful.createClient({
      space: options.space
    , accessToken: this.isProduction
        ? options.productionAccessToken
        : options.previewAccessToken
    , host: this.isProduction ? undefined : 'preview.contentful.com'
    })

    log('Production environment:', this.isProduction)

    this.get = this.get.bind(this)
    this.entryReducer = this.entryReducer.bind(this)

    this.fetchInterval = options.fetchInterval
    this.fetchIntervalId = -1

    this.data = null
  }

  get(path) {
    log('Getting content:', path)

    return _.get(this.data, path, null)
  }

  getBlogPost(slug) {
    log('Getting blog post:', slug)

    return _.find(this.get('blogPost'), {slug})
  }

  fetch(callback) {
    const self = this

    log('Fetching entries...')

    self.client.getEntries().then(function handleGet(entries) {
      log('Fetched entries:', entries)

      self.data = self.parse(entries)

      callback && callback(null, self.data, entries)
    })
  }

  startFetchInterval(callback) {
    this.fetch(callback)

    this.fetchIntervalId = setInterval(
      this.fetch.bind(this, callback)
    , this.fetchInterval
    )
  }

  parse(entries) {
    log('Parsing entries...')

    const parsed = entries.items.reduce(this.entryReducer, {})

    parsed.blogPost.sort(this.blogPostSorter)

    log('Parsed entries:', parsed)

    return parsed
  }

  blogPostSorter(a, b) {
    return b.date - a.date
  }

  tagMapper(tag) {
    return tag.fields
  }

  entryReducer(result, entry) {
    const contentType = entry.sys.contentType.sys.id
    const fields = entry.fields

    const singles = [
      'footer'
    , 'header'
    , 'landingPage'
    , 'globalElements'
    ]

    const keyed = {
      'errorPage': 'code'
    }

    switch (contentType) {
      case 'blogPost': {
        fields.date = new Date(fields.publishDate).getTime()
        fields.tags = fields.rawTags.map(this.tagMapper)
        fields.summary = fields.body.slice(0, fields.body.indexOf('\n\n'))

        if (this.isProduction && fields.date > new Date().getTime()){
          return result
        }

        break
      }
      case 'globalElements': {
        fields.tags = fields.rawTags.map(this.tagMapper)

        break
      }
    }

    log('Reducing entry:', {fields, contentType})

    if (singles.includes(contentType)) {
      result[contentType] = fields
    } else if (keyed.hasOwnProperty(contentType)) {
      result[contentType] = result[contentType] || {}
      result[contentType][fields[keyed[contentType]]] = fields
    } else if (Array.isArray(result[contentType])) {
      result[contentType].push(fields)
    } else {
      result[contentType] = [fields]
    }

    return result
  }
}

module.exports = ContentManager
