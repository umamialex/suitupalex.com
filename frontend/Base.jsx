import React from 'react'
import ReactDOM from 'react-dom'

import App from './App/App.jsx'

(function(i,s,o,g,r,a,m){
  i['GoogleAnalyticsObject'] = r
  i[r] = i[r] || function ga() {
    (i[r].q=i[r].q||[]).push(arguments)
  }, i[r].l=1*new Date()
  a=s.createElement(o), m=s.getElementsByTagName(o)[0]
  a.async=1
  a.src=g
  m.parentNode.insertBefore(a,m)
})(
  window
, document
, 'script'
, 'https://www.google-analytics.com/analytics.js'
, 'ga'
)

window.ga('create', 'UA-53849837-1', 'auto')

ReactDOM.render(
  <App url={`${process.env.URL}`}/>
, document.body.querySelector('#app')
)
