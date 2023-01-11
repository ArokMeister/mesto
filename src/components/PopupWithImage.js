import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
    this._popupImage = this._popup.querySelector('.popup__image');
  }

  open() {
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popup.querySelector('.popup__caption').textContent = this._name;
    super.open();
  };
}

export { PopupWithImage }