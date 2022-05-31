const MovieModel = require('../models/movie'),
	_ = require('lodash');
const chalk = require('chalk'),
	log = console.log;

function postMovie(req, res) {
	let {
		name,
		directoryName,
		year,
		genre,
		duration,
		language,
		imdb,
		rottenTomatoes,
		googleUsers,
		synopsis,
		size,
		quality,
		tags,
		director,
		cast,
		filmSeries,
		embedUrl
		// accountUser,
		// url,
		// websiteName
	} = req.body;
	directoryName = directoryName.replace(/ /g, '-');
	let movie = new MovieModel({
		name: {
			mainName: name.replace(/\w+/g, _.capitalize),
			directoryName
		},
		year,
		genre: genre.split(',').map((item) => _.capitalize(item.trim())),
		duration,
		language: _.capitalize(language),
		ratings: {
			imdb,
			rottenTomatoes,
			googleUsers
		},
		synopsis,
		sizeUncombined: {
			howMuch: size.slice(0, size.length - 2),
			unit: _.upperCase(size.slice(-2))
		},
		quality,
		tags: tags.split(',').map((item) => _.capitalize(item.trim())),
		director: director.replace(/\w+/g, _.capitalize),
		cast: cast.split(',').map((item) => item.replace(/\w+/g, _.capitalize)),
		filmSeries: filmSeries.replace(/\w+/g, _.capitalize),
		embedUrl: `${embedUrl}?enablejsapi=1`,
		imagesSrc: {
			image1: `/assets/${directoryName}/image1.jpg`,
			image2: `/assets/${directoryName}/image2.jpg`,
			image3: `/assets/${directoryName}/image3.jpg`,
			imagePortrait: `/assets/${directoryName}/image-portrait.jpg`
		}
		// downloadLinks: {
		// 	accountUser,
		// 	url,
		// 	websiteName
		// }
	});
	movie.save((err, doc) => {
		err ? log(err) : log(chalk.bgGreen(doc));
	});
	res.redirect('/admin');
}

module.exports = postMovie;
// _.capitalize(item.trim())
