'use strict'

const PREFIX = 'sa'

const debug = require('debug')

const SUBSYSTEMS = [
  'contentManager'
, 'httpServer'
, 'server'
, 'web'
]

function subsystemIterator(subsystem) {
  exports[subsystem] = debug(`${PREFIX}:${subsystem}`)
}

SUBSYSTEMS.forEach(subsystemIterator)
