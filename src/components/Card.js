class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteButton, userID, handleLikeClick) {
    this._value = data.name;
    this._url = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._owner = data.owner._id;
    this._userID = userID;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeClick = handleLikeClick;
    this._handleRemoveClick = this._handleRemoveClick.bind(this);
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image-temp');
    this._cardImageCaption = this._element.querySelector('.element__title-temp');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._removeButton = this._element.querySelector('.element__remove-btn');
    this._likeButton = this._element.querySelector('.element__like-btn');
    this._likeState = this._likes.some(like => like._id === this._userID);
    
    this._cardImage.src = this._url;
    this._cardImage.alt = this._value;
    this._cardImageCaption.textContent = this._value;
    this._likeCounter.textContent = this._likes.length;
        
    if (this._userID !== this._owner) {
      this._removeButton.remove()
    };

    if (this.getLikeState()) {
      this._changeVisualLike()
    };

    this._setEventListeners();

    return this._element;
  };

  getLikeState() {
    return this._likeState;
  }

  _setEventListeners() {
    const card = this;
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._value, this._url)
    });
    this._likeButton.addEventListener('click', () => {
      this._changeVisualLike();
      this._handleLikeClick(this._cardId, card);
      this._likeState = !this._likeState;
    });
    this._removeButton.addEventListener('click', () => {
      this._handleDeleteButton(this._cardId, this._handleRemoveClick);
    });
  };

  _changeVisualLike() {
    this._likeButton.classList.toggle('element__like-btn_active');
  };

  _handleRemoveClick() {
    this._element.remove();
  };

  setLikesCounter(likeCount) {
    this._likeCounter.textContent = likeCount;
  }

};

export { Card }