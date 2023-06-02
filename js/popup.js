const reservationBtns = document.querySelectorAll('.reservation');
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.close-popup');



for (let reservationBtn of reservationBtns) {
	reservationBtn.addEventListener('click', showPopup);
};
closePopupBtn.addEventListener('click', closePopup);
popupBg.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopupWithEsc);


function showPopup() {
	popup.classList.add('popup_active');
	popupBg.classList.add('popup__bg_open');
	document.body.classList.add('popup__no-scroll');
}
function closePopup() {
	popup.classList.remove('popup_active');
	popupBg.classList.remove('popup__bg_open');
	document.body.classList.remove('popup__no-scroll');
};

function closePopupWithEsc(event) {
	if (event.keyCode === 27) {
		closePopup();
	};
};
