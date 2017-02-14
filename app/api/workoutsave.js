'use-strict'

module.exports = function(app, db) {	
	var multer = require('multer')
	app.get('/test', function(req ,res){
		res.send("api is connected to server")
	})
	
	app.post('/workout', function(req, res, next){
		console.log("POSTED")
		var workout = {
			exercise:{
				name: "squat-test",
				sets: 3,
				reps: 5
			},
			exercise:{
				name: "deadlift-test",
				sets: 1,
				reps: 5
			},
			exercise:{
				name: "bench-test",
				sets: 3,
				reps: 5	
			}
		}

		//we don't need to save to the db we just need the size 
		//db.collection('workouts').save(workout, function(err, result){
		//	if err return console.log(err)
		//})
		console.log(workout)
		res.send(workout)
	})

	
}
