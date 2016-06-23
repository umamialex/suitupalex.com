import _ from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'

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

    const title = props.title
    const keywords = Array.isArray(props.keywords)
      ? props.keywords.join(', ')
      : ''

    document.title = title

    const meta = [
      {
        name: 'canonical'
      , content: props.canonical
      }
    , {
        name: 'description'
      , content: props.description
      }
    , {
        name: 'keywords'
      , content: keywords
      }
    , {
        name: 'theme-color'
      , content: '#000'
      }
    , {
        name: 'viewport'
      , content: 'width=device-width, initial-scale=1'
      }
    , {
        property: 'og:title'
      , content: title
      }
    , {
        property: 'og:url'
      , content: props.canonical
      }
    , {
        property: 'og:type'
      , content: 'article'
      }
    , {
        property: 'og:description'
      , content: props.description
      }
    ]
      
    return (
      <section className={`container flow-text ${props.className}`}>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}}
          title={title}
          meta={meta}
        />
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
  canonical: React.PropTypes.string
, children: React.PropTypes.any
, content: React.PropTypes.object
, description: React.PropTypes.string
, globalElements: React.PropTypes.object
, keywords: React.PropTypes.array
, updateRoute: React.PropTypes.func.isRequired
, title: React.PropTypes.string
}

export default Page
