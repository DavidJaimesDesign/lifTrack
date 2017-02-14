'use-strict'

module.exports = function(app, db) {	
	var multer = require('multer')
	app.get('/test', function(req ,res){
		res.send("api is connected to server")
	})
	
	app.post('/workout', function(req, res, next){
		console.log("POSTED")
		var workout = {
			exercise1:{
				name: "squat-test",
				sets: 3,
				reps: 5
			},
			exercise2:{
				name: "deadlift-test",
				sets: 1,
				reps: 5
			},
			exercise3:{
				name: "bench-test",
				sets: 3,
				reps: 5	
			}
		}

		//save to database
		db.collection('workouts').save(workout, function(err, result){
			if (err) return console.log(err)
		})
		console.log(workout)
		res.send(workout)
	})

	
}
