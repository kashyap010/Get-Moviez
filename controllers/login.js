const passport = require('passport');
const UserModel = require('../models/user');

// function login(req, res) {

// 	let { username, password } = req.body;
// 	let user = new UserModel({ username, password });
// 	req.login(user, (err) => {
// 		if (err) {
// 			res.redirect('/login');
// 		} else {
// 			passport.authenticate('local')(req, res, () => res.redirect('admin'));
// 		}
// 	});
// }
function login() {
	passport.authenticate('local', {
		successRedirect: '/admin',
		failureRedirect: '/login'
	});
}

module.exports = login;
