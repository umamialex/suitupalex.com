import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'dropcap.js'

import Page from '../Page.jsx'

import {web as log} from 'log'

import './landing-page.sass'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)

    this.blogMapper = this.blogMapper.bind(this)
  }

  getContent(path) {
    log('Getting content:', path)
    return _.get(this.props.content, path, null)
  }

  getGlobalElement(path) {
    log('Getting global element:', path)
    return _.get(this.props.globalElements, path, null)
  }

  componentDidMount() {
    log('Component mounted.')
    this.applyDropCap()
  }

  componentDidUpdate() {
    log('Component updated.')
    this.applyDropCap()
  }

  applyDropCap() {
    log('Applying dropcap.')

    const dropcaps = document.querySelectorAll('.blog-page-dropcap')
    _.forEach(dropcaps, (dropcap) => {dropcap.dcapjsStrut=null})

    window.Dropcap.layout(dropcaps, 3)
  }

  blogMapper(blog, index) {
    const body = blog.body
    const summary = blog.summary
    const dropcap = summary ? summary.slice(0, 1) : ''
    const restOfBody = summary ? summary.slice(1) : ''
    const readTime = Math.ceil(_.words(body).length / 275)

    const formattedDate = moment(blog.publishDate).format('MMMM Do, YYYY')

    const blogPageLink = this.getGlobalElement('blogPageLink')

    return (
      <div className='blog-post' key={index}>
        <h2>&ldquo;{blog.title}&rdquo;</h2>
        <p className='blog-page-date'>
          {formattedDate} | {readTime} minute read
        </p>
        <hr/>
        <span className='blog-page-dropcap'>{dropcap}</span>
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
          <a
            className='right'
            onClick={this.props.updateRoute.bind(this, blog.slug)}
          >{blogPageLink}</a>
        </p>
        <div className='clear'/>
      </div>
    )
  }

  render() {
    const props = this.props

    const blogs = props.blogs
      ? props.blogs.map(this.blogMapper) 
      : null

    return (
      <Page
        className='landing-page'
        content={props.content}
        updateRoute={props.updateRoute}
        title={this.getGlobalElement('title')}
      >
        {blogs}
      </Page>
    )
  }
}

LandingPage.propTypes = {
  content: React.PropTypes.object
, globalElements: React.PropTypes.object
, updateRoute: React.PropTypes.func.isRequired
}

export default LandingPage
