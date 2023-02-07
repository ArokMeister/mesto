import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = [...this._form.querySelectorAll('.popup__input')];
    this._submitButton = this._popup.querySelector('.popup__button');
    this._submitButtonDefaultText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.map(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  //До переделки, текст кнопки на дефолтный менялся в этом таймере (заметка для себя)
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

  //Возможно, на изменение текста кнопки в слушателе тоже нужен свой метод и использовать его в цепочке then
  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      const inputValues = this._getInputValues();
      this._submitButton.textContent = 'Сохранение...'
      this._submit(inputValues);
      });
    super.setEventListeners();
  }

  setDefaultButtonText() {
    setTimeout(() => {
      this._submitButton.textContent = this._submitButtonDefaultText;
    }, 200);
  }

}

export { PopupWithForm }