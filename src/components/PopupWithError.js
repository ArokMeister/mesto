import { Popup } from "./Popup.js";

class PopupWithError extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupErrorSpan = this._popup.querySelector('.popup__error-text');
  }

  open(err) {
    this._popupErrorSpan.textContent = err.toString().slice(7);
    super.open();
  }
}

export { PopupWithError }