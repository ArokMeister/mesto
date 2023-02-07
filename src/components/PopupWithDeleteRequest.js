import { Popup } from "./Popup.js";

class PopupWithDeleteRequest extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._buttonConfirm = this._popup.querySelector('.popup__button-yes');
    this._buttonConfirmDefaultText = this._buttonConfirm.textContent;
    this._cardId = null;
    this._fnDelete = null;
  }

  setEventListeners() {
    this._buttonConfirm.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._buttonConfirm.textContent = 'Удаляю';
      this._submit(this._cardId, this._fnDelete);
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
      this._buttonConfirm.textContent = this._buttonConfirmDefaultText;
    }, 200);
  }
}

export { PopupWithDeleteRequest }