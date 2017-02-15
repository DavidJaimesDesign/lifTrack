'use-strict'

module.exports = function(app, db) {	
	var multer = require('multer')
	app.get('/test', function(req ,res){
		res.send("api is connected to server")
	})
	
	app.post('/workout', function(req, res, next){
		//var squatsets = req.body

		console.log("POSTED")
		var workout = {
			exercise1:{
				name: "squat",
				sets: req.body.squat.sets,
				reps: req.body.squat.reps
			},
			exercise2:{
				name: "deadlift",
				sets: req.body.deadlift.sets,
				reps: req.body.deadlift.reps
			},
			exercise3:{
				name: "bench",
				sets: req.body.bench.sets,
				reps: req.body.bench.reps
			}
		}

		//save to database
		db.collection('workouts').save(workout, function(err, result){
			if (err) return console.log(err)
		})
		console.log(req.body)
		res.send(req.body)
	})

	
}
