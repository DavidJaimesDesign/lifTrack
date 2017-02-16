var express     = require('express')
var path        = require('path')
var MongoClient = require('mongodb').MongoClient
var multer      = require('multer')
var bodyParser  = require('body-parser')
var routes      = require('./app/routes/index.js')
var api         = require('./app/api/workoutsave.js')
var compression = require('compression')
var app         = express()
var db 



MongoClient.connect("mongodb://LeetDave:14789632@ds149049.mlab.com:49049/djd-liftrack", function (err, database){
	if (err) throw err;
	db = database
	console.log("connected to workous db")
		
	db.createCollection("workouts",{
		capped:true,
		size: 5242880,
		max: 5000
	})

    db.createCollection("users",{
        capped:true,
        size: 5242880,
        max: 5000
    })

    var userCheck;
    db.collection('users', function(err, collection){
        if(err) throw err;

        else{
            collection.findOne({ name: "user1"}, function(err, result){
                if(err) throw err;
                userCheck = result;    
                console.log(userCheck);
                if(userCheck == null){
           			var user = {
                		name: "user1",
                		height: 190,
                		weight: 100,
                		squat: 285,
                		deadlift: 285,
                		bench: 210,
                		overheadpress: 125,
                		clean: 135,
                		increment: false,
                		incrementvalue: 5,
                		frequency: 3,
                		workoutplan : [
                    					{
                        					name: 'Squat',
                        					sets: 3,
                         					reps: 5
                    					},
                    					{
                        					name: 'Deadlift',
                        					sets: 1,
                        					reps: 5
                    					},
                    					{
                        					name: 'Bench',
                        					sets: 3,
                        					reps: 5
                    					}   
                					]
            		}       

            		db.collection('users').save(user, function(err, result){
                		if(err) console.log(err);
            		})
        		}
            })
        }
    })
        

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

    app.use(compression())
    app.use(express.static(path.join(__dirname, 'public')))

	//app.set('views', path.join(__dirname, 'views'))//I dont know if to use this one
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })

	routes(app, db) 
	api(app, db) //app isnt listening here

	var PORT = process.env.PORT || 3000
	app.listen(PORT, function() {
  		console.log('Production Express server running at localhost:' + PORT)
	})
})
