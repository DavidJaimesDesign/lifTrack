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
	//app.use(bodyParser.json())

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
