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
    window.Dropcap.layout(
      document.querySelectorAll('.blog-page-dropcap')
    , 3
    )
  }

  blogMapper(blog, index) {
    const body = blog.body
    const summary = body.slice(0, body.indexOf('\n\n'))
    const dropcap = summary ? summary.slice(0, 1) : ''
    const restOfBody = summary ? summary.slice(1) : ''

    const formattedDate = moment(blog.publishDate).format('MMMM Do, YYYY')

    const blogPageLink = this.getGlobalElement('blogPageLink')

    return (
      <div className='blog-post' key={index}>
        <h2>&ldquo;{blog.title}&rdquo;</h2>
        <p className='blog-page-date'>{formattedDate}</p>
        <hr/>
        <span className='blog-page-dropcap'>{dropcap}</span>
        <ReactMarkdown
          className='blog-page-body'
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