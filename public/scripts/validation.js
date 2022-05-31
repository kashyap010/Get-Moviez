const imdb = document.querySelector('.ratings-imdb'),
	rottenTomatoes = document.querySelector('.ratings-rotten-tomatoes'),
	googleUsers = document.querySelector('.ratings-google-users'),
	year = document.getElementById('year'),
	duration = document.getElementById('duration'),
	size = document.getElementById('size'),
	directoryName = document.getElementById('dir-name');

//Ratings validation
imdb.addEventListener('change', (e) => {
	if ((e.target.value <= 0 || e.target.value > 10) && e.target.value !== '') showError(e);
	else removeError(e);
});
rottenTomatoes.addEventListener('change', (e) => {
	if ((e.target.value <= 0 || e.target.value > 100) && e.target.value !== '') showError(e);
	else removeError(e);
});
googleUsers.addEventListener('change', (e) => {
	if ((e.target.value <= 0 || e.target.value > 100) && e.target.value !== '') showError(e);
	else removeError(e);
});

//Year validation
year.addEventListener('change', (e) => {
	if (e.target.value !== '' && !(parseInt(e.target.value) <= new Date().getFullYear())) showError(e);
	else removeError(e);
});

//Duration validation
duration.addEventListener('change', (e) => {
	if (e.target.value !== '' && !/^(([1-9]h)( [1-5]?[0-9]m)?)$|^([1-5][0-9]m)$/gi.test(e.target.value)) showError(e);
	else removeError(e);
});

//Size validation
size.addEventListener('change', (e) => {
	if (e.target.value !== '' && !/gb|mb/i.test(e.target.value.slice(-2))) showError(e);
	else removeError(e);
});

//Directory name validation
// directoryName.addEventListener('change', (e) => {
// 	if (e.target.value !== '' && !/^(\w+)$|^(\w+(\\\ \w+)+)$/.test(e.target.value)) showError(e);
// 	else removeError(e);
// });

function showError(e) {
	e.target.nextElementSibling.hidden = false;
	e.target.classList.toggle('is-error');
}
function removeError(e) {
	e.target.nextElementSibling.hidden = true;
	e.target.classList.remove('is-error');
}
