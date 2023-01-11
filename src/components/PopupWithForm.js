import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputs = [...this._form.querySelectorAll('.popup__input')];
    const inputValues = {};
    this._inputs.map(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  close() {
    super.close();
    setTimeout(() => {
      this._form.reset();
    }, 200);
  }

  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      const inputValues = this._getInputValues();
      this._submit(inputValues)});
    super.setEventListeners();
  }
}

export { PopupWithForm }