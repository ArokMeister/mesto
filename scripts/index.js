//Импорт массива карточек
import initialCards from './arrays.js';

//Строки из блока профиля
const nameProfileElement = document.querySelector('.profile__name'); //Строка с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Строка с профессией профиля

// Popoup edit profile
const popupProfile = document.querySelector('.popup_profile'); // Попап для редактирования профиля
const popupProfileButtonOpen = document.querySelector('.profile__edit-btn');
const popupProfileButtonClose = popupProfile.querySelector('.popup__close-profile');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupInputName = popupProfile.querySelector('.popup__input-name');
const popupInputJob = popupProfile.querySelector('.popup__input-job');

// Popup add cards
const popupPlace = document.querySelector('.popup_place'); // Попап для добавления картинки
const popupPlaceButtonOpen = document.querySelector('.profile__add-btn');
const popupPlaceButtonClose = popupPlace.querySelector('.popup__close-place');
const popupFormPlace = popupPlace.querySelector('.popup__form-place');
const popupInputPlace = popupPlace.querySelector('.popup__input-place');
const popupInputUrl = popupPlace.querySelector('.popup__input-url');

//Popup image
const popupView = document.querySelector('.popup_view');
const popupViewButtonClose = popupView.querySelector('.popup__close-image');

//Тэмплэйт для создания карточки
const cardsContainer = document.querySelector('.elements__list'); // Получаем список из разметки
const templateElement = document.querySelector('.elements__item-template'); // Получаем блок template (заготовка)
const templateItem = templateElement.querySelector('.elements__item'); // Получаем элемент списка 

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
  const popupViewImage = popupView.querySelector('.popup__image');
  templateImage.src = urlValue;
  templateImage.alt = placeValue;
  templateItem.querySelector('.element__title-temp').textContent = placeValue;
  templateItem.querySelector('.element__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });
  templateItem.querySelector('.element__remove-btn').addEventListener('click', function(element) {
    const deleteCard = element.target;
    deleteCard.closest('.elements__item').remove();
  });
  templateImage.addEventListener('click', function() {
    popupViewImage.src = urlValue;
    popupViewImage.alt = placeValue;
    popupView.querySelector('.popup__caption').textContent = placeValue;
    openPopup(popupView);
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
popupProfileButtonOpen.addEventListener('click', function() {
  openPopup(popupProfile);
  rename();
}); //Открываем попап профиля по клику

popupProfileButtonClose.addEventListener('click', function() {
  closePopup(popupProfile)
}); //Закрываем попап профиля по клику

popupFormProfile.addEventListener('submit', formSubmitHandler); //Слушатель на сабмит на кнопке в попапе профиля

popupPlaceButtonOpen.addEventListener('click', function() {
  openPopup(popupPlace);
}); //Открываем попап для добавления карточки по клику

popupPlaceButtonClose.addEventListener('click', function() {
  closePopup(popupPlace);
}); //Закрываем попап для добавления карточки по клику

popupViewButtonClose.addEventListener('click', function() {
  closePopup(popupView);
}); //Закрываем просмотр картинки

// Случашетль для формы, которая после сабмита запускает функцию клонирования карточки
popupFormPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  prependInsertCard(popupInputPlace.value, popupInputUrl.value);
  popupInputPlace.value = '';
  popupInputUrl.value = '';
  closePopup(popupPlace);
});