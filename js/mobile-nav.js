//Mobile-nav
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
	nav.classList.toggle('mobile-nav_open');
	fade.classList.toggle('mobile-nav-fade_open');
	menuIcon.classList.toggle('nav-icon_active');
	document.body.classList.toggle('no-scroll');
};

fade.onclick = function () {
	nav.classList.toggle('mobile-nav_open');
	fade.classList.toggle('mobile-nav-fade_open');
	menuIcon.classList.toggle('nav-icon_active');
	document.body.classList.toggle('no-scroll');
};