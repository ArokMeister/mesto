//Импорт массива карточек
import initialCards from './arrays.js';
import { FormValidator } from './FormValidator.js';
import { configuration } from './config.js';
import { Card } from './Card.js';

//Строки из блока профиля
const nameProfileElement = document.querySelector('.profile__name'); //Строка с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Строка с профессией профиля

//ищем все попапы
const popups = document.querySelectorAll('.popup');

// Popoup edit profile
const popupProfile = document.querySelector('.popup_profile'); // Попап для редактирования профиля
const popupProfileEditButton = document.querySelector('.profile__edit-btn');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupInputName = popupProfile.querySelector('.popup__input-name');
const popupInputJob = popupProfile.querySelector('.popup__input-job');

// Popup add cards
const popupPlace = document.querySelector('.popup_place'); // Попап для добавления картинки
const popupPlaceAddButton = document.querySelector('.profile__add-btn');
const popupFormPlace = popupPlace.querySelector('.popup__form-place');
const popupInputPlace = popupPlace.querySelector('.popup__input-place');
const popupInputUrl = popupPlace.querySelector('.popup__input-url');

//Popup image
export const popupView = document.querySelector('.popup_view');
export const popupViewImage = popupView.querySelector('.popup__image');
export const popupViewCaption = popupView.querySelector('.popup__caption');

//Тэмплэйт для создания карточки
const cardsContainer = document.querySelector('.elements__list'); // Получаем список из разметки

//Функция открытия попапов
export const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', handlerKeyDown);
};

//Функция закрытия попапов
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerKeyDown);
};

//Отслеживаение нажатия Esc и закрытие попапов
const handlerKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const modalOpen = document.querySelector('.popup_opened');
    closePopup(modalOpen);
  }
};

//Функция создания карточек
const createCard = (item) => {
  const card = new Card(item, '.elements__item-template');
  const cardElement = card.generateCard();
  return cardElement;
}

//Вставка карточек из готового массива
initialCards.forEach(item => {
  const cardElement = createCard(item);
  cardsContainer.prepend(cardElement);
});

//Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии
function rename() {
  popupInputName.value = nameProfileElement.textContent;
  popupInputJob.value = professionProfileElement.textContent;
};

//Функция, которая вносит изменения в имя и профессию в блоке профиля, записывая данные которые вписываются в инпуты в попапе
function handlerFormSubmit(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = popupInputName.value;
  professionProfileElement.textContent = popupInputJob.value;
  closePopup(popupProfile);
};

//Обработчики событий
popupProfileEditButton.addEventListener('click', () => {
    openPopup(popupProfile);
    rename();
});

//Открытие попапа добавления картинки и ресет формы
popupPlaceAddButton.addEventListener('click', () => {
  popupFormPlace.reset();
  openPopup(popupPlace);
});

//Закрытие попапа по клику на крестик или оверлей
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
});

//Слушатель на сабмит на кнопке в попапе профиля
popupFormProfile.addEventListener('submit', handlerFormSubmit);

// Случашетль для формы, которая после сабмита запускает функцию клонирования карточки
popupFormPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const cardElement = createCard({name: popupInputPlace.value, link: popupInputUrl.value});
  cardsContainer.prepend(cardElement);
  closePopup(popupPlace);
});

//Запускаем на каждую форму валидацию
document.querySelectorAll(configuration.formSelector).forEach(form => {
  const formValidator = new FormValidator(configuration, form);
  formValidator.enableValidation();
});