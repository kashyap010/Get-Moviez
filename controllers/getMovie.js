const MovieModel = require('../models/movie');

function getMovie(req, res) {
	let movieName = req.params.movieName;

	MovieModel.findOne({ 'name.directoryName': movieName }, (err, foundDocument) => {
		if (!err && foundDocument) res.render('movie-page-trial', { movie: foundDocument });
		else res.render('not-found');
	});
}

module.exports = getMovie;
