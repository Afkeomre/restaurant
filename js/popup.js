const reservationBtns = document.querySelectorAll('.reservation');
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.close-popup');
const phoneInput = document.querySelector('.phone-input');
const phoneLabelWarning = document.querySelector('.phone-label_warning');
const phoneLabelInfo = document.querySelector('.phone-label_info');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

for (let reservationBtn of reservationBtns) {
   reservationBtn.addEventListener('click', showPopup);
}
closePopupBtn.addEventListener('click', closePopup);
popupBg.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopupWithEsc);

function showPopup(event) {
   popup.classList.add('popup_active');
   popupBg.classList.add('popup__bg_open');
   document.body.classList.add('popup__no-scroll');
   if (event.target.dataset.sign === 'burger-btn') {
      hideMobileNav();
   }
}

function closePopup() {
   popup.classList.remove('popup_active');
   popupBg.classList.remove('popup__bg_open');
   document.body.classList.remove('popup__no-scroll');
}

function closePopupWithEsc(event) {
   if (event.keyCode === 27) {
      closePopup();
   }
}

if (popup.classList.contains('popup_active')) {
   for (let input of inputs) {
      input.ariaReadOnly = false;
   }
   textarea.ariaReadOnly = false;
} else {
   for (let input of inputs) {
      input.ariaReadOnly = true;
   }
   textarea.ariaReadOnly = true;
}

//Запрет скролла на iOS
document.body.addEventListener('touchmove', function (event) {
   if (popup.classList.contains('popup_active')) {
      event.preventDefault();
   }
});

//Валидация поля ввода телефона
const mask = IMask(phoneInput, {
   mask: '+{7}(000)000-00-00',
});

popup.addEventListener('submit', function (event) {
   if (phoneInput.value.length < 16) {
      event.preventDefault();
      phoneLabelInfo.classList.remove('phone-label_active');
      phoneLabelWarning.classList.add('phone-label_active');
   }
});

phoneInput.addEventListener('input', function () {
   if (phoneInput.value.length === 16) {
      phoneLabelInfo.classList.add('phone-label_active');
      phoneLabelWarning.classList.remove('phone-label_active');
   }
});
