import React from 'react'
import ReactDOM from 'react-dom'

import App from './App/App.jsx'

ReactDOM.render(
  <App url={`${process.env.URL}`}/>
, document.body.querySelector('#app')
)
