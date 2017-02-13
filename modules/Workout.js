import React from 'react'
import NavLink from './NavLink'
import { browserHistor } from 'react-router'
export default React.createClass({
    
    handleSubmit(event){
        event.preventDefault();
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        browserHistory.push(path)
        console.log(path)
    },

    render() {
        return (
            <div>
                <h2>Workouts</h2>
                <h4> more to come</h4>	
                <form onSubmit={this.handleSubmit}>
                	<h5>Squat</h5>
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '} 
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '}
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '}

                	<h5>DeadLift</h5>
                	5 <input type="checkbox" name="vehicle1" value="Bike"/> {' '}
                	<h5>Bench</h5>
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '} 
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '}
                	5<input type="checkbox" name="vehicle1" value="Bike"/> {' '}
                	<h5>Completed</h5>
                    <button type="submit">Go</button>
                </form>
                {this.props.children}
            </div>
        )
    }
})
