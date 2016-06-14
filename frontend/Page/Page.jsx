import _ from 'lodash'
import React from 'react'

import {web as log} from 'log'

import './page.sass'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  getContent(path) {
    log('Getting content:', path)
    return _.get(this.props.content, path, null)
  }

  getGlobalElement(path) {
    log('Getting global element:', path)
    return _.get(this.props.globalElements, path, null)
  }

  render() {
    const props = this.props

    document.title = [
      this.getGlobalElement('pageTitlePrefix')
    , this.getContent('title')
    ].join('')

    return (
      <section className={`container flow-text ${props.className}`}>
        {props.children}
        <a
          className='page-home'
          onClick={props.updateRoute.bind(this, '/~')}
        >~</a>
      </section>
    )
  }
}

Page.propTypes = {
  children: React.PropTypes.any
, content: React.PropTypes.object
, globalElements: React.PropTypes.object
, updateRoute: React.PropTypes.func.isRequired
}

export default Page
