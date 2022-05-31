require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const getMovie = require('./controllers/getMovie');
const postMovie = require('./controllers/admin');
const register = require('./controllers/register');

//main config
app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { secure: false }
	})
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/movieDb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});
const UserModel = require('./models/user');
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app
	//USER
	.get([ '/', '/home' ], (req, res) => {
		res.render('home');
	})
	.get('/browse-movies', (req, res) => {
		res.render('browse-movies');
	})
	.get('/movie-page', (req, res) => {
		res.render('movie-page');
	})
	.get('/not-found', (req, res) => {
		res.render('not-found');
	})
	.get('/movie-page/:movieName', getMovie)
	//ADMIN
	.get('/register', (req, res) => {
		res.render('admin/login', { path: 'register' });
	})
	.get('/login', (req, res) => {
		res.render('admin/login', { path: 'login' });
	})
	.get('/admin', (req, res) => {
		if (req.isAuthenticated()) res.render('admin/admin');
		else res.redirect('/login');
	})
	.post('/register', register)
	.post(
		'/login',
		passport.authenticate('local', {
			successRedirect: '/admin',
			failureRedirect: '/login'
		})
	)
	.post('/admin', postMovie)
	.listen(3000, () => console.log('http://localhost:3000/home'));
