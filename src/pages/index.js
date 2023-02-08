//Импорты
import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { configuration, apiConfig } from '../scripts/config.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithDeleteRequest } from '../components/PopupWithDeleteRequest.js';
import { PopupWithError } from '../components/PopupWithError.js';

// Popoup edit profile
const popupProfileEditButton = document.querySelector('.profile__edit-btn');

// Popup add cards
const popupPlaceAddButton = document.querySelector('.profile__add-btn');

const avatarImage = document.querySelector('.profile__image-edit');

const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__profession', avatarSelector: '.profile__avatar'});

const api = new Api(apiConfig);

Promise.all([
  api.getUserData(),
  api.getCards()
]).then(res => {
  userInfo.setUserId(res[0]); 
  userInfo.setUserInfo(res[0]);
  userInfo.setAvatar(res[0]);
  insertCard.renderItems(res[1]);
}).catch(err => popupWithError.open(err));

function handleLikeClick(cardId, card) {
  const method = card.getLikeState() ? 'DELETE' : 'PUT';
  api.setLikes(cardId, method)
    .then(res => {
      card.setLikesCounter(res.likes.length);
      card.changeVisualLike();
    })
    .catch(err => {popupWithError.open(err); console.log(err)})
};

function handlePlaceFormSubmit(data) {
  api.postCard(data)
    .then(res => {
      insertCard.addItem(res);
      popupPlace.close();
    })
    .catch(err => popupWithError.open(err))
    .finally(() => popupPlace.setDefaultButtonText())
};

function handleSubmitDeleteRequest(cardId, fnDelete) {
  api.deleteCard(cardId)
    .then(() => {
      fnDelete();
      popupWithQuestion.close();
    })
    .catch(err => popupWithError.open(err))
    .finally(() => popupWithQuestion.setDefaultButtonText())
};

function handleProfileFormSubmit(data) {
  api.setUserData(data)
    .then(res => {
      userInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch(err => popupWithError.open(err))
    .finally(() => popupProfile.setDefaultButtonText())
};

function hadleSubmitAvatar(data) {
  api.updateAvatar(data)
    .then(res => {
      userInfo.setAvatar(res);
      avatarPopup.close()
    })
    .catch(err => popupWithError.open(err))
    .finally(() => avatarPopup.setDefaultButtonText())
};

function handleCardClick(name, link) {
  popupView.open(name, link);
};

//Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии
function fillProfileInputs() {
  const profileValues = userInfo.getUserInfo();
  popupProfile.setInputValues(profileValues);
};

function handleDeleteButton(cardId, fnDelete) {
  popupWithQuestion.open(cardId, fnDelete);
};

//Функция создания карточек
const createCard = (data) => {
  const card = new Card(data, '.elements__item-template', handleCardClick, handleDeleteButton, userInfo.getUserId(), handleLikeClick);
  const cardElement = card.generateCard();
  return cardElement;
};

//Вставка карточек из готового массива
const insertCard = new Section({
  renderer: createCard
  }, '.elements__list');

//Экземпляры классов и их обработчики с функциями
const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm('.popup_place', handlePlaceFormSubmit);
popupPlace.setEventListeners();

const popupWithQuestion = new PopupWithDeleteRequest('.popup_remove', handleSubmitDeleteRequest);
popupWithQuestion.setEventListeners();

const popupWithError = new PopupWithError('.popup_error');
popupWithError.setEventListeners();

const popupView = new PopupWithImage('.popup_view');
popupView.setEventListeners();

const avatarPopup = new PopupWithForm('.popup_avatar', hadleSubmitAvatar);
avatarPopup.setEventListeners();

// Запускаем на каждую форму валидацию если бы метод resetValidation() был приватным
// document.querySelectorAll(configuration.formSelector).forEach(form => {
//   const formValidator = new FormValidator(configuration, form);
//   formValidator.enableValidation();
// });

//Запуск валидации форм, для использования публичного метода resetValidation()
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
  formValidators['profileform'].resetValidation();
  popupProfile.open();
  fillProfileInputs();
});

//Открытие попапа добавления картинки и ресет формы
popupPlaceAddButton.addEventListener('click', () => {
  formValidators['placeform'].resetValidation();
  popupPlace.open();
});

avatarImage.addEventListener('click', () => {
  formValidators['avatarform'].resetValidation();
  avatarPopup.open();
})

// Токен: 3c6efdf5-8f0e-4628-bbb4-38bfae6a93b7
// Идентификатор группы: cohort-59"