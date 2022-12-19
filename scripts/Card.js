import { popupViewImage, popupViewCaption, popupView, openPopup } from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._value = data.name;
    this._url = data.link;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.element__image-temp').src = this._url;
    this._element.querySelector('.element__image-temp').alt = this._value;
    this._element.querySelector('.element__title-temp').textContent = this._value;

    return this._element;
  };

  _setEventListeners() {
    this._element.querySelector('.element__image-temp').addEventListener('click', () => {
      popupViewImage.src = this._url;
      popupViewImage.alt = this._value;
      popupViewCaption.textContent = this._value;
      openPopup(popupView);
    });
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handlerLikeClick();
    });
    this._element.querySelector('.element__remove-btn').addEventListener('click', () => {
      this._handlerRemoveClick();
    });
  };

  _handlerLikeClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  };

  _handlerRemoveClick() {
    this._element.remove();
  };
};

export { Card }