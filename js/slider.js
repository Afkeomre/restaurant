let slides = document.querySelectorAll('.cards__item');
let cards = document.querySelector('.cards');
let dotsContainer = document.querySelector('.dots-container');
let dots = document.querySelectorAll('.dot');
let prew = document.querySelector('.prew');
let next = document.querySelector('.next');


let slideIndex = 1;

function plusSlides(n, elements, marks) {
	showSlides(slideIndex += n, elements, marks);
};

function currentSlide(n, elements, marks) {
	showSlides(slideIndex = n, elements, marks);
};

function showSlides(n, elements, marks) {
	if (n > elements.length) {
		slideIndex = 1;
	};
	if (n < 1) {
		slideIndex = elements.length;
	};
	for (let element of elements) {
		element.style.display = 'none';
	}
	for (let mark of marks) {
		mark.classList.remove('active');
	}

	elements[slideIndex - 1].style.display = 'flex';
	marks[slideIndex - 1].classList.add('active');
}

function deploySlides() {
	for (let slide of slides) {
		slide.style.display = 'flex';
	}
}

function adaptSlider() {
	if (window.innerWidth < 769) {
		for (let slide of slides) {
			slide.classList.add('fade');
		};
		cards.classList.add('slideshow-container');
		dotsContainer.classList.add('mobile');
		prew.classList.add('mobile');
		next.classList.add('mobile');

		showSlides(slideIndex, slides, dots);
	} else {
		for (let slide of slides) {
			slide.classList.remove('fade');
		};
		cards.classList.remove('slideshow-container');
		dotsContainer.classList.remove('mobile');
		prew.classList.remove('mobile');
		next.classList.remove('mobile');

		deploySlides();
	};
};

adaptSlider();

window.addEventListener('resize', adaptSlider);






