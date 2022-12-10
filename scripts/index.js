//Импорт массива карточек
import initialCards from './arrays.js';

//Найдем тело страницы, для написания обрабочкика событий всех попапов
const body = document.querySelector('.page');

// //Находим формы и их элементы
// const formProfile = document.forms.profileform;
// const formProfileName = formProfile.elements.name;
// const formProfileJob = formProfile.elements.job;

// const formPlace = document.forms.placeform;
// const formPlaceSpot = formPlace.elements.place;
// const formPlaceUrl = formPlace.elements.url;

//Строки из блока профиля
const nameProfileElement = document.querySelector('.profile__name'); //Строка с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Строка с профессией профиля

// Popoup edit profile
const popupProfile = document.querySelector('.popup_profile'); // Попап для редактирования профиля
// const popupProfileButtonOpen = document.querySelector('.profile__edit-btn');
// const popupProfileButtonClose = popupProfile.querySelector('.popup__close-profile');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupInputName = popupProfile.querySelector('.popup__input-name');
const popupInputJob = popupProfile.querySelector('.popup__input-job');

// Popup add cards
const popupPlace = document.querySelector('.popup_place'); // Попап для добавления картинки
// const popupPlaceButtonOpen = document.querySelector('.profile__add-btn');
// const popupPlaceButtonClose = popupPlace.querySelector('.popup__close-place');
const popupFormPlace = popupPlace.querySelector('.popup__form-place');
const popupInputPlace = popupPlace.querySelector('.popup__input-place');
const popupInputUrl = popupPlace.querySelector('.popup__input-url');

//Popup image
const popupView = document.querySelector('.popup_view');
// const popupViewButtonClose = popupView.querySelector('.popup__close-image');

//Тэмплэйт для создания карточки
const cardsContainer = document.querySelector('.elements__list'); // Получаем список из разметки

//Функция открытия попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
};

//Функция закрытия попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
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
  };
  if (evt.target.classList.contains('popup__close-place') || evt.target.classList.contains('popup_place')) {
    closePopup(popupPlace);
  };
  if (evt.target.classList.contains('popup__close-image') || evt.target.classList.contains('popup_view')) {
    closePopup(popupView);
  };
});

// Закрытие любого попапа по кнопке Escape
body.addEventListener('keydown', function(evt) {
  // if (modal === )
  
  if (evt.key === 'Escape') {
    closePopup(popupProfile);
    closePopup(popupPlace);
    closePopup(popupView);
  }
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