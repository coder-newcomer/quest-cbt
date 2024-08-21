import { Component } from 'solid-js'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import './styles/index.css'

import Login from './Login'

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
    </Router>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
