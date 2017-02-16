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

        this.handleSquatCheck    = this.handleSquatCheck.bind(this);
        this.handleDeadliftCheck = this.handleDeadliftCheck.bind(this);
        this.handleBenchCheck    = this.handleBenchCheck.bind(this);
        this.handleSubmit        = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event){
        //event.preventDefault();
        console.log("back to regular forms")
        let request = new XMLHttpRequest();
        let sendWorkout = this.state.workout;

        request.open('POST','/workout', true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(sendWorkout));
    }

    handleSquatCheck(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;

        if(value){
            let setCheck = this.state.workout.squat.sets;
            if(setCheck < 3){
                let workout = this.state.workout;
                ++workout.squat.sets;
                this.setState({workout});
                console.log(this.state.workout.squat.sets);
            }
        }else{
            let setCheck = this.state.workout.squat.sets;
            if(setCheck >= 0){
                let workout = this.state.workout;
                --workout.squat.sets;
                this.setState({workout});
                console.log(this.state.workout.squat.sets);
            }
        }
    }

    handleDeadliftCheck(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        
        if(value){
            let setCheck = this.state.workout.deadlift.sets;
            if(setCheck < 1){
                let workout = this.state.workout;
                ++workout.deadlift.sets;
                this.setState({workout});
                console.log(this.state.workout.deadlift.sets);
            }
        }else{
            let setCheck = this.state.workout.deadlift.sets;
            if(setCheck >= 0){
                let workout = this.state.workout;
                --workout.deadlift.sets;
                this.setState({workout});
                console.log(this.state.workout.deadlift.sets);
            }
        }
    }

    handleBenchCheck(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        
        if(value){
            let setCheck = this.state.workout.bench.sets;
            if(setCheck < 3){
                let workout = this.state.workout;
                ++workout.bench.sets;
                this.setState({workout});
                console.log(this.state.workout.bench.sets);
            }
        }else{
            let setCheck = this.state.workout.bench.sets;
            if(setCheck >= 0){
                let workout = this.state.workout;
                --workout.bench.sets;
                this.setState({workout});
                console.log(this.state.workout.bench.sets);
            }
        }
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
