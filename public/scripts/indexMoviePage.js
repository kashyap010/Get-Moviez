const collapsibleIcon = document.querySelector('.collapsible-icon'),
	moreDetails = document.querySelector('.more-details'),
	shareLinkModal = document.getElementById('sharePopup'),
	shareLink = document.querySelector('.share-link');

//SHOW MORE DETAILS
collapsibleIcon.addEventListener('click', (e) => {
	if (collapsibleIcon.children[0].classList.contains('fa-chevron-down')) {
		collapsibleIcon.children[0].className = 'fas fa-chevron-up';
		moreDetails.style.display = 'grid';
	} else {
		collapsibleIcon.children[0].className = 'fas fa-chevron-down';
		moreDetails.style.display = 'none';
	}
	e.preventDefault();
});

// SHARE LINK
function showShareLink() {
	shareLinkModal.style.display = 'block';
}
function closeShareLink() {
	shareLinkModal.style.display = 'none';
}
shareLink.onclick = () => {
	shareLink.previousElementSibling.innerText = 'Link copied';
	shareLink.select();
	shareLink.setSelectionRange(0, 99999);
	document.execCommand('copy');
	setTimeout(() => (shareLink.previousElementSibling.innerText = 'Click to copy'), 5000);
};
