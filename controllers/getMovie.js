const MovieModel = require('../models/movie');
const chalk = require('chalk'),
	log = console.log;

function getMovie(req, res) {
	let movieName = req.params.movieName;

	MovieModel.findOne({ 'name.directoryName': movieName }, (err, foundDocument) => {
		if (!err && foundDocument) res.render('movie-page-trial', { movie: foundDocument });
		else res.render('not-found');
	});
}

module.exports = getMovie;
