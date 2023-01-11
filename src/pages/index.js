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

//Тэмплэйт для создания карточки
const cardsContainer = document.querySelector('.elements__list'); // Получаем список из разметки

//Функция создания карточек
const createCard = (item) => {
  const card = new Card(item, '.elements__item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

//Вставка карточек из готового массива
const insertCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    insertCard.addItem(cardElement);
  }
}, '.elements__list');

insertCard.renderItems();

function handleCardClick(name, link) {
  const popupView = new PopupWithImage('.popup_view', name, link);
  popupView.setEventListeners();
  popupView.open();
};

const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__profession'});

//Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии
function fillProfileInputs() {
  const profileValues = userInfo.getUserInfo();
  popupInputName.value = profileValues.name;
  popupInputJob.value = profileValues.about;
};

//Функция, которая вносит изменения в имя и профессию в блоке профиля, записывая данные которые вписываются в инпуты в попапе
function handleProfileFormSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  popupProfile.close();
};

function handlePlaceFormSubmit({ place, url }) {
  const cardElement = createCard({name: place, link: url});
  cardsContainer.prepend(cardElement);
  popupPlace.close();
};

const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm('.popup_place', handlePlaceFormSubmit);
popupPlace.setEventListeners();

//Обработчики событий
popupProfileEditButton.addEventListener('click', () => {
  popupProfile.open();
  fillProfileInputs();
});

//Открытие попапа добавления картинки и ресет формы
popupPlaceAddButton.addEventListener('click', () => {
  popupPlace.open();
});

//Запускаем на каждую форму валидацию
document.querySelectorAll(configuration.formSelector).forEach(form => {
  const formValidator = new FormValidator(configuration, form);
  formValidator.enableValidation();
});