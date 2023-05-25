const menuBtn = document.querySelector('.btn__header-welcome');
const titleSmall = document.querySelector('.header-welcome__title_small');
const titleBig = document.querySelector('.header-welcome__title_big');

const changeText = () => {
	if (window.innerWidth < 426) {
		menuBtn.textContent = 'Меню';
		titleSmall.textContent = 'Добро пожаловать ';
		titleBig.textContent = 'В наш ресторан';
	} else {
		menuBtn.textContent = 'View menu';
		titleSmall.textContent = 'Добро пожаловать в ';
		titleBig.textContent = 'Наш ресторан';
	};
}

changeText();

window.addEventListener('resize', changeText);


