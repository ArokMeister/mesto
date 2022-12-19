class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  };

  _checkInputValid(input) {
    const error = document.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
      error.textContent = '';
      error.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
    } else {
      error.textContent = input.validationMessage;
      error.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
    }
  };

  _toggleButtonIsValid() {
    const isValid = this._inputs.every(input => input.validity.valid); // короткая запись возврата (вместо {return input.validity.valid})
    if (isValid) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    }
  };

  _setEventListeners() {
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

  enableValidation() {
    this._inputs = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._setEventListeners();
  };
};

export { FormValidator }