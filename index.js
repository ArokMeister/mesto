const popupElement = document.querySelector('.popup');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-btn');
const popupOpenBtnElement = document.querySelector('.profile__edit-btn');

const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_is-opened');
}

popupOpenBtnElement.addEventListener('click', togglePopupVisibility);
popupCloseBtnElement.addEventListener('click', togglePopupVisibility);

const nameProfileElement = document.querySelector('.profile__name');
const professionProfileElement = document.querySelector('.profile__profession');

const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');

const formSaveBtnElement = formElement.querySelector('.popup__save-btn');
formSaveBtnElement.addEventListener('click', togglePopupVisibility);

function rename() {
  nameInput.value = nameProfileElement.textContent;
  jobInput.value = professionProfileElement.textContent;
}
rename();

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfileElement.textContent = nameInput.value;
  professionProfileElement.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);