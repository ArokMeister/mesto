import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = [...this._form.querySelectorAll('.popup__input')];
    this._submitButton = this._popup.querySelector('.popup__button');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.map(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  close() {
    super.close();
    setTimeout(() => {
      this._form.reset();
      this._submitButton.textContent = 'Сохранить'
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
}

export { PopupWithForm }