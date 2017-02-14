import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Workout from './modules/Workout'

function handleAddPost(nextState, replaceState) {
    console.log(nextState.location.state.method) // 'POST'
    console.log(nextState.location.state.body) // {comment: '...'}
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/workout" component={Workout}></Route>
      <Route path="/workout" onEnter={handleAddPost}></Route>
      <Route path="/about" component={About}/></Route>
  </Router>
), document.getElementById('app'))
