import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = [...this._form.querySelectorAll('.popup__input')];
    this._submitButton = this._popup.querySelector('.popup__button');
    this._submitButtonPlace = this._popup.querySelector('.popup__create-button');
    this._submitButtonProfile = this._popup.querySelector('.popup__save-button');
    this._defaultPlaceButtonText = 'Создать';
    this._defaultProfileButtonText = 'Сохранить';
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.map(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  //До переделки, текст кнопки менялся в этом таймере (заметка для себя)
  close() {
    super.close();
    setTimeout(() => {
      this._form.reset();
    }, 200);
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      const inputValues = this._getInputValues();
      this._submit(inputValues);
      this._submitButton.textContent = 'Сохранение...'});
    super.setEventListeners();
  }

  setDefaultButtonPlaceText() {
    setTimeout(() => {
      this._submitButton.textContent = this._defaultPlaceButtonText;
    }, 200);
  }

  setDefaultButtonProfileText() {
    setTimeout(() => {
      this._submitButton.textContent = this._defaultProfileButtonText;
    }, 200);
  }
}

export { PopupWithForm }