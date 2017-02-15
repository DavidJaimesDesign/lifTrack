#LifTrack
###This is the lifTrack readme. Right now it just has the user stories and brainstorming of how the project will go.

###Version Log

    ##Version 0.0.1 - current version
        1. User can complete workout form 
        2. User can submit form and it is saved to a database
    ##Version 0.0.2 - in progress
        1. User can see workout stats of previous workouts
        2. User can add to or remove workouts including the defaults
    
##MVP-Stories
1. I can log in and start a workout
2. I can check off completed sets 
3. I can mark if a set was not completed
4. I have default workouts that are mine that alternate weekly
5. I can create and delete workouts
6. I can create scheduled workouts
7. I can set how much to increment wheight every workout
 
##Future Stories
1. I can see my progress in pretty charts
2. I can add friends and share workouts and progress
3. I can preload community programs

##UX
This needs to be researched

##UI
Characteristics:
	1. While working out it needs to be super simple to use and read. I am working out I have minimal oxygen in my brain
	2. Simple Styling no artsy stuff should feel simple like when I use my lifting notebook
##Database Structure

###Exercise Object
    ```javascript
    Exercise = {
        "name": "Exercise Name",
        "sets": "number value",
        "reps": "number value"
    }
    ```
###Worout Object
    ```javascript
        Workout = {
            "date": "Date Object",
            "length": "Time Object",
            "Exercises": Exercise[]
        }
    ```
###User Object
    ```javascript
        User = {
            "username": "String",
            "last login": "Date Object",
            "workouts": Workout[],
            "Others will be added"   
        }
    ```
        
##Brainstorming

. How is the db going to be ochastrated?
. Front end will be in React
. Backend framework will be Node.Js and the associated js frameworks and libraries
. Database will be MongoDB 
. I am going to need to research and remember how this whole thing works 
. First line item will be setting up a DB Architecture
. Second is setting up the app with no login



