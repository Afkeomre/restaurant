let slidesFeedback = document.querySelectorAll('.feedback__card');
let dotsFeedback = document.querySelectorAll('.dot_feedback');

let slideIndexFeedback = 1;

function plusSlidesFeedback(n, elements, marks) {
	showSlidesFeedback(slideIndexFeedback += n, elements, marks);
};

function currentSlideFeedback(n, elements, marks) {
	showSlidesFeedback(slideIndexFeedback = n, elements, marks);
};

function showSlidesFeedback(n, elements, marks) {
	if (n > elements.length) {
		slideIndexFeedback = 1;
	};
	if (n < 1) {
		slideIndexFeedback = elements.length;
	};
	for (let element of elements) {
		element.style.display = 'none';
	}
	for (let mark of marks) {
		mark.classList.remove('active');
	}

	elements[slideIndexFeedback - 1].style.display = 'flex';
	marks[slideIndexFeedback - 1].classList.add('active');
}


showSlidesFeedback(slideIndexFeedback, slidesFeedback, dotsFeedback);

window.addEventListener('resize', showSlidesFeedback);



