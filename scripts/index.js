//Импорт массива карточек
import initialCards from './arrays.js';

//Найдем тело страницы, для написания обрабочкика событий всех попапов
const body = document.querySelector('.page');

//Строки из блока профиля
const nameProfileElement = document.querySelector('.profile__name'); //Строка с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Строка с профессией профиля

// Popoup edit profile
const popupProfile = document.querySelector('.popup_profile'); // Попап для редактирования профиля
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupInputName = popupProfile.querySelector('.popup__input-name');
const popupInputJob = popupProfile.querySelector('.popup__input-job');

// Popup add cards
const popupPlace = document.querySelector('.popup_place'); // Попап для добавления картинки
const popupPlaceCreateButton = popupPlace.querySelector('.popup__create-button');
const popupFormPlace = popupPlace.querySelector('.popup__form-place');
const popupInputPlace = popupPlace.querySelector('.popup__input-place');
const popupInputUrl = popupPlace.querySelector('.popup__input-url');

//Popup image
const popupView = document.querySelector('.popup_view');

//Тэмплэйт для создания карточки
const cardsContainer = document.querySelector('.elements__list'); // Получаем список из разметки

//Функция открытия попапов
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  body.addEventListener('keydown', handleKeyDown);
};

//Функция закрытия попапов
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  body.removeEventListener('keydown', handleKeyDown);
};

const handleKeyDown = (evt) => {
  const modalOpen = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(modalOpen);
  }
};

// Функция возврата клонированной карточки с обработкой лайка, кнопки удаления и возможности просмотра картинки по клику
function createCard(placeValue, urlValue) {
  const templateElement = document.querySelector('.elements__item-template').content;
  const templateItem = templateElement.querySelector('.elements__item').cloneNode(true);
  const templateImage = templateItem.querySelector('.element__image-temp');
  const templateTitle = templateItem.querySelector('.element__title-temp');
  const popupViewImage = popupView.querySelector('.popup__image');
  const popupViewCaption = popupView.querySelector('.popup__caption');
  
  templateImage.src = urlValue;
  templateImage.alt = placeValue;
  templateTitle.textContent = placeValue;
  templateItem.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('element__like-btn')) {
      evt.target.classList.toggle('element__like-btn_active');
    };
    if (evt.target.classList.contains('element__remove-btn')) {
      evt.target.closest('.elements__item').remove();
    };
    if (evt.target.classList.contains('element__image-temp')) {
      popupViewImage.src = urlValue;
      popupViewImage.alt = placeValue;
      popupViewCaption.textContent = placeValue;
      openPopup(popupView);
    };
  });

  return templateItem;
};

//Функция вставки склонированной карточки
function prependInsertCard(textValue, linkValue) {
  cardsContainer.prepend(createCard(textValue, linkValue));
};

//Автоматическая загрузка карточек из массива
initialCards.forEach(function(element) {
  prependInsertCard(element.name, element.link);
});

//Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии
function rename() {
  popupInputName.value = nameProfileElement.textContent;
  popupInputJob.value = professionProfileElement.textContent;
};

//Функция, которая вносит изменения в имя и профессию в блоке профиля, записывая данные которые вписываются в инпуты в попапе
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = popupInputName.value;
  professionProfileElement.textContent = popupInputJob.value;
  closePopup(popupProfile);
};

//Обработчики событий
// Общий слушатель на теле страницы, для открытия и закрытия всех попапов как по кнопке так и по клику на оверлее
body.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('profile__edit-btn')) {
    openPopup(popupProfile);
    rename();
  };
  if (evt.target.classList.contains('popup__close-profile') || evt.target.classList.contains('popup_profile')) {
    closePopup(popupProfile);
  };
  if (evt.target.classList.contains('profile__add-btn')) {
    openPopup(popupPlace);
    popupPlaceCreateButton.setAttribute('disabled', 'disabled');
    popupPlaceCreateButton.classList.add('popup__button_disabled');
  };
  if (evt.target.classList.contains('popup__close-place') || evt.target.classList.contains('popup_place')) {
    closePopup(popupPlace);
  };
  if (evt.target.classList.contains('popup__close-image') || evt.target.classList.contains('popup_view')) {
    closePopup(popupView);
  };
});

//Слушатель на сабмит на кнопке в попапе профиля
popupFormProfile.addEventListener('submit', formSubmitHandler);

// Случашетль для формы, которая после сабмита запускает функцию клонирования карточки
popupFormPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  prependInsertCard(popupInputPlace.value, popupInputUrl.value);
  popupInputPlace.value = '';
  popupInputUrl.value = '';
  closePopup(popupPlace);
});