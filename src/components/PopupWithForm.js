import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = [...this._form.querySelectorAll('.popup__input')];
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
    }, 200);
  }

  // Разобрался, спасибо Вам за такие подробные комментарии, это помогает начинать разбираться и понимать, почему предложеный Вами вариант работает
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      const inputValues = this._getInputValues();
      this._submit(inputValues)});
    super.setEventListeners();
  }
}

export { PopupWithForm }