class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._value = data.name;
    this._url = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image-temp');
    
    this._cardImage.src = this._url;
    this._cardImage.alt = this._value;
    this._element.querySelector('.element__title-temp').textContent = this._value;

    this._setEventListeners();

    return this._element;
  };

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__like-btn');

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._value, this._url)
    });
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__remove-btn').addEventListener('click', () => {
      this._handleRemoveClick();
    });
  };

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__like-btn_active');
  };

  _handleRemoveClick() {
    this._element.remove();
  };
};

export { Card }