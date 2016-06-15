import _ from 'lodash'
import React from 'react'

import {web as log} from 'log'

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  getContent(path) {
    log('Getting content:', path)

    return _.get(this.props.content, path, null)
  }

  render() {
    return (
      <div id='container'>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  children: React.PropTypes.any
, content: React.PropTypes.object
}

export default Container
