import React, { Component } from 'react';
import NavLink from './NavLink'

class App extends Component{
  render() {
    return (
      <div>
        <h1>Liftrack workout App v 0.0.1</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/workout">Workout</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
