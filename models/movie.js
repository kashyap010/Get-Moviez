const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
	{
		name: {
			mainName: {
				type: String,
				required: true,
				trim: true
			},
			directoryName: {
				type: String,
				required: true,
				trim: true
			}
		},
		year: {
			type: Number,
			required: true,
			min: 1950,
			max: new Date().getFullYear()
		},
		genre: {
			type: [ String ],
			required: true
		},
		duration: {
			type: String,
			required: true,
			match: /^(([1-9]h)( [1-5]?[0-9]m)?)$|^([1-5][0-9]m)$/,
			trim: true
		},
		language: {
			type: String,
			required: true,
			trim: true
		},
		ratings: {
			imdb: {
				type: Number,
				min: 0,
				max: 10,
				required: true
			},
			rottenTomatoes: {
				type: Number,
				min: 0,
				max: 100,
				required: true
			},
			googleUsers: {
				type: Number,
				min: 0,
				max: 100,
				required: true
			}
		},
		synopsis: {
			type: String,
			required: true,
			trim: true
		},
		sizeUncombined: {
			howMuch: {
				type: Number,
				min: 0,
				required: true
			},
			unit: {
				type: String,
				match: /gb|mb/i,
				required: true
			}
		},
		quality: {
			type: String,
			default: '720p',
			trim: true
		},
		tags: {
			type: [ String ],
			required: true
		},
		director: {
			type: String,
			required: true,
			trim: true
		},
		cast: {
			type: [ String ],
			required: true
		},
		filmSeries: {
			type: String,
			default: '-',
			required: true,
			trim: true
		},
		imagesSrc: {
			image1: {
				type: String,
				required: true,
				trim: true
			},
			image2: {
				type: String,
				required: true,
				trim: true
			},
			image3: {
				type: String,
				required: true,
				trim: true
			},
			imagePortrait: {
				type: String,
				required: true,
				trim: true
			}
		},
		embedUrl: {
			type: String,
			required: true,
			trim: true
		},
		downloadLinks: [
			{
				accountUser: {
					type: String,
					required: true,
					trim: true
				},
				url: {
					type: String,
					required: true,
					match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
					trim: true
				},
				websiteName: {
					type: String,
					required: true,
					trim: true
				}
			}
		]
	},
	{ timestamps: true },
	{ collection: 'movies' }
);
movieSchema.virtual('size').get(() => `${this.sizeUncombined.howMuch}${this.sizeUncombined.unit}`);

module.exports = new mongoose.model('movies', movieSchema);

// match: /^(\w+)$|^(\w+(\\\ \w+)+)$/ig,
