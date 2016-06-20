import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import ReactDisqusThread from 'react-disqus-thread'
import ReactMarkdown from 'react-markdown'
import removeMarkdown from 'remove-markdown'
import 'dropcap.js'

import Page from '../Page.jsx'

import {web as log} from 'log'

import './blog-page.sass'

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
  }

  getContent(path, def) {
    log('Getting content:', path)
    return _.get(this.props.content, path, def)
  }

  applyDropCap() {
    const dropcap = this.refs.dropcap

    log('Applying dropcap.')

    dropcap.dcapjsStrut = null
    window.Dropcap.layout(dropcap, 3)
  }

  componentDidMount() {
    log('Component mounted.')
    this.applyDropCap()
  }

  componentDidUpdate() {
    log('Component updated.')
    this.applyDropCap()
  }

  render() {
    const props = this.props

    const title = this.getContent('title')
    const slug = this.getContent('slug')
    const body = this.getContent('body')
    const tags = this.getContent('tags', [])
    const keywords = tags.map((tag) => {return tag.title})
    const description = body
      ? removeMarkdown(body.slice(0, body.indexOf('\n\n')))
      : ''
    const dropcap = body ? body.slice(0, 1) : ''
    const restOfBody = body ? body.slice(1) : ''
    const readTime = Math.ceil(_.words(body).length / 275)

    const formattedDate = moment(this.getContent('publishDate'))
      .format('MMMM Do, YYYY')

    const previous = props.previous
    const previousLink = previous
      ? (
          <a
            className='left blog-page-previous'
            onClick={props.updateRoute.bind(this, previous.slug)}
          >
            - &ldquo;{previous.title}&rdquo;
          </a>
        )
      : null

    const next = props.next
    const nextLink = next
      ? (
          <a
            className='right blog-page-next'
            onClick={props.updateRoute.bind(this, next.slug)}
          >
            &ldquo;{next.title}&rdquo; +
          </a>
        )
      : null

    return (
      <Page
        canonical={props.canonical}
        description={description}
        keywords={keywords}
        className='blog-page'
        content={props.content}
        globalElements={props.globalElements}
        updateRoute={props.updateRoute}

      >
        <h1>&ldquo;{title}&rdquo;</h1>
        <p className='blog-page-date'>
          {formattedDate} | {readTime} minute read
        </p>
        <hr/>
        <span className='blog-page-dropcap' ref='dropcap'>{dropcap}</span>
        <ReactMarkdown
          className='blog-page-body'
          renderers={{
            Link: props => (
              <a
                href={props.href}
                target={props.href.indexOf('/') === 0 ? '' : '_blank'}
              >{props.children}</a>
            )
          }}
          source={restOfBody}
        />
        <p>
          {previousLink}{nextLink}
          <span className='clear'/>
        </p>
        <div className='blog-page-disqus'>
          <ReactDisqusThread
            shortname='suitupalex'
            url={`http://suitupalex.com/${slug}`}
            identifier={slug}
            title={title}
          />
        </div>
      </Page>
    )
  }
}

BlogPage.propTypes = {
  canonical: React.PropTypes.string
, content: React.PropTypes.object
, globalElements: React.PropTypes.object
, updateRoute: React.PropTypes.func.isRequired
}

export default BlogPage
