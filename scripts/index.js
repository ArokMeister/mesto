//Массив карточек
const initialCards = [
  {
    name: 'Код',
    link: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Токио',
    link: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80'
  },
  {
    name: 'Германия',
    link: 'https://images.unsplash.com/photo-1541558618-e8a990c6382c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1707&q=80'
  },
  {
    name: 'Сейшелы',
    link: 'https://images.unsplash.com/photo-1624964650998-8a49fc6e35c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Синая',
    link: 'https://images.unsplash.com/photo-1635246678511-08d5ba58ac3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80'
  },
  {
    name: 'Парк',
    link: 'https://images.unsplash.com/photo-1668009219418-4ece0d9e36c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
  }
];

//Строки из блока профился
const nameProfileElement = document.querySelector('.profile__name'); //Строка с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Строка с профессией профиля

// Popoup edit profile
const popupProfile = document.querySelector('.popup_profile'); // Попап для редактирования профиля
const popupProfileOpen = document.querySelector('.profile__edit-btn');
const popupProfileClose = popupProfile.querySelector('.popup__close-profile');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupInputName = popupProfile.querySelector('.popup__input-name');
const popupInputJob = popupProfile.querySelector('.popup__input-job');

// Popup add cards
const popupPlace = document.querySelector('.popup_place'); // Попап для добавления картинки
const popupPlaceOpen = document.querySelector('.profile__add-btn');
const popupPlaceClose = popupPlace.querySelector('.popup__close-place');
const popupFormPlace = popupPlace.querySelector('.popup__form-place');
const popupInputPlace = popupPlace.querySelector('.popup__input-place');
const popupInputUrl = popupPlace.querySelector('.popup__input-url');

//Popup image
const popupView = document.querySelector('.popup_view');
const popupViewClose = popupView.querySelector('.popup__close-image');

//Тэмплэйт для создания карточки
const ulCards = document.querySelector('.elements__list'); // Получаем список из разметки
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
function addNewCard(placeValue, urlValue) {
  const templateElement = document.querySelector('.elements__item-template').content;
  const templateItem = templateElement.querySelector('.elements__item').cloneNode(true);
  templateItem.querySelector('.element__image-temp').src = urlValue;
  templateItem.querySelector('.element__image-temp').alt = placeValue;
  templateItem.querySelector('.element__title-temp').textContent = placeValue;
  templateItem.querySelector('.element__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });
  templateItem.querySelector('.element__remove-btn').addEventListener('click', function(element) {
    const deleteCard = element.target;
    deleteCard.closest('.elements__item').remove();
  });
  templateItem.querySelector('.element__image-temp').addEventListener('click', function() {
    popupView.querySelector('.popup__image').src = urlValue;
    popupView.querySelector('.popup__image').alt = placeValue;
    popupView.querySelector('.popup__caption').textContent = placeValue;
    openPopup(popupView);
  });
  return templateItem;
};

//Функция вставки склонированной карточки
function prependInsertCard(textValue, linkValue) {
  ulCards.prepend(addNewCard(textValue, linkValue));
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
popupProfileOpen.addEventListener('click', function() {
  openPopup(popupProfile);
  rename();
}); //Открываем попап профиля по клику

popupProfileClose.addEventListener('click', function() {
  closePopup(popupProfile)
}); //Закрываем попап профиля по клику

popupFormProfile.addEventListener('submit', formSubmitHandler); //Слушатель на сабмит на кнопке в попапе профиля

popupPlaceOpen.addEventListener('click', function() {
  openPopup(popupPlace);
}); //Открываем попап для добавления карточки по клику

popupPlaceClose.addEventListener('click', function() {
  closePopup(popupPlace);
}); //Закрываем попап для добавления карточки по клику

popupViewClose.addEventListener('click', function() {
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