//Импорты
import './index.css';
import initialCards from '../scripts/arrays.js';
import { FormValidator } from '../components/FormValidator.js';
import { configuration } from '../scripts/config.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

// Popoup edit profile
const popupProfileEditButton = document.querySelector('.profile__edit-btn');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputJob = document.querySelector('.popup__input-job');

// Popup add cards
const popupPlaceAddButton = document.querySelector('.profile__add-btn');

//Контейнер (список в разметке) куда встаятся карточки
const cardsContainer = document.querySelector('.elements__list');

//Функция создания карточек
const createCard = (item) => {
  const card = new Card(item, '.elements__item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

//Вставка карточек из готового массива
const insertCard = new Section({
  items: initialCards,
  renderer: createCard
  }, '.elements__list');

insertCard.renderItems();

//Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии
function fillProfileInputs() {
  const profileValues = userInfo.getUserInfo();
  popupInputName.value = profileValues.name;
  popupInputJob.value = profileValues.about;
};

//Экземпляры классов и их обработчики с функциями
const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__profession'});

const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
popupProfile.setEventListeners();

function handleProfileFormSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  popupProfile.close();
};

const popupPlace = new PopupWithForm('.popup_place', handlePlaceFormSubmit);
popupPlace.setEventListeners();

function handlePlaceFormSubmit({ place, url }) {
  const cardElement = createCard({name: place, link: url});
  cardsContainer.prepend(cardElement);
  popupPlace.close();
};

const popupView = new PopupWithImage('.popup_view');
popupView.setEventListeners();

function handleCardClick(name, link) {
  popupView.open(name, link);
};

// Запускаем на каждую форму валидацию
// document.querySelectorAll(configuration.formSelector).forEach(form => {
//   const formValidator = new FormValidator(configuration, form);
//   formValidator.enableValidation();
// });

const formValidators = {};
const enableValidation = (configuration) => {
  const formList = Array.from(document.querySelectorAll(configuration.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(configuration, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
};

enableValidation(configuration);

//Обработчики событий
popupProfileEditButton.addEventListener('click', () => {
  popupProfile.open();
  fillProfileInputs();
});

//Открытие попапа добавления картинки и ресет формы
popupPlaceAddButton.addEventListener('click', () => {
  popupPlace.open();
});
