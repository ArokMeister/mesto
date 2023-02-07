import { Popup } from "./Popup.js";

class PopupWithDeleteRequest extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._buttonConfirm = this._popup.querySelector('.popup__button-yes');
    this._cardId = null;
    this._fnDelete = null;
    this._defaultButtonText = 'Да';
  }

  setEventListeners() {
    this._buttonConfirm.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._submit(this._cardId, this._fnDelete)
      this._buttonConfirm.textContent = 'Удаляю';
    });
    super.setEventListeners()
  }
 
  open(cardId, fnDelete) {
    this._cardId = cardId;
    this._fnDelete = fnDelete;
    super.open()
  }

  setDefaultButtonText() {
    setTimeout(() => {
      this._buttonConfirm.textContent = this._defaultButtonText;
    }, 200);
  }
}

export { PopupWithDeleteRequest }