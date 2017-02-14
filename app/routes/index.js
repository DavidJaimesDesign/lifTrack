'use-strict'

module.exports = function(app) {
	app.route('/testmore').get(function(req, res){
		res.send('links have been made')
	})
}
