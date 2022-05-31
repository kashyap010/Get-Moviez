const menuIcon = document.querySelector('.drop-icon'),
	dropMenu = document.querySelector('.drop-menu'),
	scrollToTopBtn = document.getElementById('scrollToTop'),
	navLeft = document.querySelector('.nav-left'),
	navRight = document.querySelector('.nav-right'),
	headerContainer = document.querySelector('.header-container'),
	searchModal = document.getElementById('popup'),
	playTrailer = document.getElementById('playPopup'),
	trailer = document.getElementById('youtube-trailer'),
	loader = document.getElementById('loader-container');
let isMenuOpen = true;
//TOGGLE MENU ICON
menuIcon.addEventListener('click', (e) => {
	isMenuOpen = !isMenuOpen;
	if (!isMenuOpen) {
		menuIcon.children[0].classList.replace('fa-bars', 'fa-times');
		dropMenu.style.display = 'grid';
	} else {
		menuIcon.children[0].classList.replace('fa-times', 'fa-bars');
		dropMenu.style.display = 'none';
	}
	e.preventDefault();
});

//SEARCH MODAL
function showSearchModal() {
	searchModal.style.display = 'block';
}
function closeSearchModal() {
	searchModal.style.display = 'none';
}

//CARD ITEM CONTAINER BOTTOM TO TOP TRANSITION
function topTransition(e, percent) {
	Array.from(e.children)[1].style.bottom = percent;
}

// SCROLL TO TOP
function scrollFunction() {
	if (window.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = 'block';
		document.querySelector('header').style.borderBottom = '.5px solid rgba(0, 0, 0, .4)';
		navLeft.style.fontSize = '1.3rem';
		navRight.style.fontSize = '1rem';
	} else {
		scrollToTopBtn.style.display = 'none';
		document.querySelector('header').style.borderBottom = '.5px solid rgba(0, 0, 0, .1)';
		navLeft.style.fontSize = '1.5rem';
		navRight.style.fontSize = '1.2rem';
	}
}
function topFunction() {
	window.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//SHOW TRAILER
function showTrailer() {
	// trailer.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	playTrailer.style.display = 'block';
}
function stopTrailer() {
	trailer.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	playTrailer.style.display = 'none';
}

//STOP LOADER
window.addEventListener('DOMContentLoaded', () => {
	window.beg = Date.now();
});
window.addEventListener('load', () => {
	setTimeout(() => {
		loader.style.display = 'none';
	}, Math.max(2000, Date.now() - window.beg));
});

//LOAD MOVIE-PAGE SCRIPT ONLY WHEN REQUIRED
if (/\/movie-page/.test(window.location.pathname)) {
	let script = document.createElement('script');
	script.setAttribute('src', '/scripts/indexMoviePage.js');
	document.body.appendChild(script);
}
