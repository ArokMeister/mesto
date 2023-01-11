class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  };
  
  enableValidation() {
    this._inputs = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._setEventListeners();
  };

  _showInputError(input) {
    this._error.textContent = input.validationMessage;
    this._error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideInputError(input) {
    this._error.textContent = '';
    this._error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };

  _checkInputValid(input) {
    this._error = document.querySelector(`#${input.id}-error`);
    input.validity.valid 
    ? this._hideInputError(input)
    : this._showInputError(input);
  };

  _activeButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  };

  _inactiveButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  };

  _toggleButtonIsValid() {
    const isValid = this._inputs.every(input => input.validity.valid); // короткая запись возврата (вместо {return input.validity.valid})
    isValid ? this._activeButton() : this._inactiveButton();
  };

  _setEventListeners() {
    this._toggleButtonIsValid();
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValid(input);
        this._toggleButtonIsValid();
      });
    });

    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonIsValid();
      }, 0);
    });
  };
};

export { FormValidator }