const passport = require('passport');
const UserModel = require('../models/user');

function register(req, res) {
	let { username, password } = req.body;
	UserModel.register({ username }, password, (err, user) => {
		if (err) {
			res.redirect('/register');
		} else {
			passport.authenticate('local')(req, res, () => res.redirect('admin'));
		}
	});
}

module.exports = register;
