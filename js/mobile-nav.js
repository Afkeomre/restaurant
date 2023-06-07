//Mobile-nav
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');
const majorLink = document.querySelector('#major-link');
const mealsLink = document.querySelector('#meals-link');
const aboutUsLink = document.querySelector('#aboutus-link');
const reservationLink = document.querySelector('#reservation-link');
const menuLink = document.querySelector('#menu-link');
const major = document.querySelector('#major');
const meals = document.querySelector('#meals');
const aboutUs = document.querySelector('#aboutus');
const reservation = document.querySelector('#reservation');
const menu = document.querySelector('#menu');

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

//Запрет скролла на iOS
document.body.addEventListener('touchmove', function (event) {
   if (nav.classList.contains('mobile-nav_open')) {
      event.preventDefault();
   }
});

//Привязка навигации к разделам сайта
function hideMobileNav() {
   nav.classList.remove('mobile-nav_open');
   fade.classList.remove('mobile-nav-fade_open');
   menuIcon.classList.remove('nav-icon_active');
   document.body.classList.remove('no-scroll');
}

majorLink.onclick = function (event) {
   event.preventDefault();
   major.scrollIntoView();
   hideMobileNav();
};

mealsLink.onclick = function (event) {
   event.preventDefault();
   meals.scrollIntoView();
   hideMobileNav();
};

aboutUsLink.onclick = function (event) {
   event.preventDefault();
   aboutUs.scrollIntoView();
   hideMobileNav();
};

reservationLink.onclick = function (event) {
   event.preventDefault();
   reservation.scrollIntoView();
   hideMobileNav();
};

menuLink.onclick = function (event) {
   event.preventDefault();
   menu.scrollIntoView();
   hideMobileNav();
};
