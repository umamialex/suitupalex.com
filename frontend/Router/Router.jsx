import _ from 'lodash'
import React from 'react'
import urlParse from 'url-parse'
import Scroll from 'scroll-js'

import Container from '../Container/Container.jsx'
import BlogPage from '../Page/BlogPage/BlogPage.jsx'
import ErrorPage from '../Page/ErrorPage/ErrorPage.jsx'
import LandingPage from '../Page/LandingPage/LandingPage.jsx'

import {web as log} from 'log'

class Router extends React.Component {
  constructor(props) {
    super(props)

    this.scroll = new Scroll(document.body)

    this.handlePopState = this.handlePopState.bind(this)
    this.parseRoute = this.parseRoute.bind(this)
    this.updateRoute = this.updateRoute.bind(this)

    const parsed = this.parseRoute(window.location.href)

    this.state = {
      route: parsed.route
    , query: parsed.query
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
  }

  parseRoute(raw) {
    log('Parsing route:', raw)

    const parsed = urlParse(raw, true)
    const route = _.compact(parsed.pathname.split('/'))

    const out = {
      route
    , query: parsed.query
    }

    log('Parsed route to:', out)

    this.updateGa(`/${route.join('/')}`)

    return out
  }

  updateRoute(path, scroll) {
    log('Updating to route:', path)

    if (path.indexOf('/') === 0) {
      path = path.slice(1)
    }

    const parsed = this.parseRoute(`/${path}`)
    const route = parsed.route

    this.scroll.to(0, typeof scroll === 'number' ? scroll : 0)

    if (_.isEqual(this.state.route, route)) {
      return
    }

    history.pushState(null, null, route.join('/'))

    this.setState(parsed)
  }

  updateGa(route) {
    log('Updating GA:', route)

    window.ga('set', 'page', route)
    window.ga('send', 'pageview')
  }

  handlePopState() {
    log('Handling popped state:', window.location.href)

    this.setState(this.parseRoute(window.location.href))
    this.scroll.to(0, typeof scroll === 'number' ? scroll : 0)
  }

  getContent(path) {
    log('Getting content:', path)
    return _.get(this.props.content, path, null)
  }

  getBlogContent(slug) {
    log('Getting blog content:', slug)

    const blogPosts = this.getContent('blogPost')

    const current = (
      typeof slug === 'string'
        ? _.find(blogPosts, {slug})
        : _.get(blogPosts, 0, null)
    )

    const index = blogPosts && current
      ? blogPosts.indexOf(current)
      : false

    const previous = index !== false && index > 0
      ? blogPosts[index - 1]
      : null

    const next = index !== false && index < blogPosts.length - 1
      ? blogPosts[index + 1]
      : null

    return {
      previous
    , current
    , next
    }
  }

  render() {
    const props = this.props
    const state = this.state

    const content = props.content
    const route = state.route
    const globalElements = this.getContent('globalElements')

    var page = (
      <ErrorPage
        content={this.getContent('errorPage.404')}
        globalElements={globalElements}
        updateRoute={this.updateRoute}
      />
    )

    if (route.length === 0 || route[0] === '~') {
      page = (
        <LandingPage
          content={this.getContent('landingPage')}
          blogs={this.getContent('blogPost')}
          globalElements={globalElements}
          updateRoute={this.updateRoute}
        />
      )
    } else {
      switch (route[0]) {
        default: {
          const slug = route[0]
          const postData = this.getBlogContent(slug)

          log('Rendering blog post:', slug, postData)

          page = (
            <BlogPage
              content={postData.current}
              previous={postData.previous}
              next={postData.next}
              globalElements={globalElements}
              updateRoute={this.updateRoute}
            />
          )
        }
      }
    }

    return (
      <Container content={content}>
        {page}
      </Container>
    )
  }
}

Router.propTypes = {
  content: React.PropTypes.object
}

export default Router
