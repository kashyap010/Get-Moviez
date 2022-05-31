const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: 'string',
			match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			required: true,
			trim: true
		},
		password: {
			type: 'string',
			// required: true,
			trim: true
		}
	},
	{ timestamps: true },
	{ collection: 'users' }
);
userSchema.plugin(passportLocalMongoose);

module.exports = new mongoose.model('users', userSchema);
