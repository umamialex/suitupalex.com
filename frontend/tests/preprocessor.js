'use strict'

var ReactTools = require('react-tools')

module.exports = {
  process: function process(src, path) {
    if (
      !path.match(/\.js$/) &&
      !path.match(/\.jsx$/) &&
      !path.match(/\.json$/)
    ) {
      return ''
    }

    return ReactTools.transform(src)
  }
}
