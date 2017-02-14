import React, { Component } from 'react';
import Form from 'react-router-form'
import NavLink from './NavLink'
import { browserHistor } from 'react-router'

class Workout extends Component{
    handleSubmit(event){
        //event.preventDefault();
        console.log("back to regular forms")
        let formData = new FormData();
        let request = new XMLHttpRequest();

        formData.append("username", "Groucho");
        console.log(formData)
        request.open('POST', 'send', true);
        request.send(formData)
    }
    render() {
        return (
            <div>
                <h2>Workouts</h2>
                <h4> more to come</h4>	
                <form onSubmit={this.handleSubmit}>
                	<h5>Squat</h5>
                	5<input type="checkbox" name="squat1" value="squatset1"/> {' '} 
                	5<input type="checkbox" name="squat2" value="squatset2"/> {' '}
                	5<input type="checkbox" name="squat3" value="squatset3"/> {' '}

                	<h5>DeadLift</h5>
                	5 <input type="checkbox" name="deadlift" value="deadlift"/> {' '}
                	<h5>Bench</h5>
                	5<input type="checkbox" name="bench1" value="benchset1"/> {' '} 
                	5<input type="checkbox" name="bench2" value="benchset2"/> {' '}
                	5<input type="checkbox" name="bench3" value="benchset3"/> {' '}
                	<h5>Completed</h5>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Workout;
