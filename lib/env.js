'use strict'

const PREFIX = 'SA'

const ENV_VARS = [
  ['CONTENTFUL_PRODUCTION_ACCESS_TOKEN']
, ['CONTENTFUL_PREVIEW_ACCESS_TOKEN']
, ['CONTENTFUL_SPACE']
, ['FETCH_INTERVAL']
, ['PORT']
, ['URL']
]

function envVarIterator(envVar) {
  const key = envVar[0]
  const optional = envVar[1]

  const fullKey = `${PREFIX}_${key}`
  const value = process.env[fullKey]

  if (!value && !optional) {
    throw new Error(`Missing ${fullKey}`)
  }

  exports[key] = value
}

ENV_VARS.forEach(envVarIterator)

exports.NODE_ENV = process.env.NODE_ENV
