import React, { Component } from 'react';
import Form from 'react-router-form'
import NavLink from './NavLink'
import { browserHistor } from 'react-router'

class Workout extends Component{
    constructor(props){
        super(props);

        this.state = {
            workout: {
                squat:{
                    reps: 5,
                    sets: 0,
                    maxsets: 3,
                },
                deadlift:{
                    reps: 5,
                    sets: 0,
                    maxsets: 1,
                },

                bench:{
                    reps: 5,
                    sets: 0,
                    maxsets: 3
                }
            }
        }

        this.handleSquatCheck = this.handleSquatCheck.bind(this);
    }
    

    handleSubmit(event){
        //event.preventDefault();
        console.log("back to regular forms")
        let formData = new FormData();
        let request = new XMLHttpRequest();

        formData.append("username", "Groucho");
        console.log(formData);
        request.open('POST','/workout', true);
        request.send(formData)
    }

    handleSquatCheck(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;

        if(value){
            console.log(this.state.workout.squat.sets);
        }
    }

    handleDeadliftCheck(event){
        console.log("deadlift connected");
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
    }

    handleBenchCheck(event){
        console.log("bench connected");
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
    }

    render() {
        return (
            <div>
                <h2>Workouts</h2>
                <h4> more to come</h4>	
                <form onSubmit={this.handleSubmit}>
                	<h5>Squat</h5>
                 	5<input type="checkbox" name="squat1" value="squatset1" onChange={this.handleSquatCheck}/> 
                	5<input type="checkbox" name="squat2" value="squatset2" onChange={this.handleSquatCheck}/> 
                	5<input type="checkbox" name="squat3" value="squatset3" onChange={this.handleSquatCheck}/> 

                	<h5>DeadLift</h5>
                	5 <input type="checkbox" name="deadlift" value="deadlift" onChange={this.handleDeadliftCheck}/> 
                	<h5>Bench</h5>
                	5<input type="checkbox" name="bench1" value="benchset1" onChange={this.handleBenchCheck}/> 
                	5<input type="checkbox" name="bench2" value="benchset2" onChange={this.handleBenchCheck}/> 
                	5<input type="checkbox" name="bench3" value="benchset3" onChange={this.handleBenchCheck}/> 
                	<h5>Completed</h5>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Workout;
