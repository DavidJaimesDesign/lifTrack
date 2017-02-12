import React from 'react'
import NavLink from './NavLink'

export default React.createClass{(
    render(){
        return(
            <div>
                <h1>LifTrack</h1>
                <h2>current version 0.0.1</h2>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><Navlink to="/about">About</NavLink></li>
                    <li><NavLink to="/workouts">Workouts</NavLink</li>
               </ul>
                {this.props.children}
           </div>
        )
    }
})
