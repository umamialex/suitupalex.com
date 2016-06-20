'use strict'

const contentful = require('contentful')

class ContentManager {
  constructor(options) {
    this.log = options.log
    this.isProduction = options.isProduction

    this.client = contentful.createClient({
      space: options.space
    , accessToken: this.isProduction
        ? options.productionAccessToken
        : options.previewAccessToken
    , host: this.isProduction ? undefined : 'preview.contentful.com'
    })

    this.log('Production environment:', this.isProduction)

    this.entryReducer = this.entryReducer.bind(this)

    this.fetchInterval = options.fetchInterval
    this.fetchIntervalId = -1

    this.data = null
  }

  fetch(callback) {
    const self = this

    self.log('Fetching entries...')

    self.client.getEntries().then(function handleGet(entries) {
      self.log('Fetched entries:', entries)

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
    this.log('Parsing entries...')

    const parsed = entries.items.reduce(this.entryReducer, {})

    parsed.blogPost.sort(this.blogPostSorter)

    this.log('Parsed entries:', parsed)

    return parsed
  }

  blogPostSorter(a, b) {
    return b.date - a.date
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

        if (this.isProduction && fields.date > new Date().getTime()){
          return result
        }

        break
      }
    }

    this.log('Reducing entry:', {fields, contentType})

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
